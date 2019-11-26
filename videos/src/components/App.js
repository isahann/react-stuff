import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    console.log(term);

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    console.log(response);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
