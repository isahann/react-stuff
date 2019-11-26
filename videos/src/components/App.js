import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

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

  onVideoSelect = video => {
    // console.log(video);

    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* I have {this.state.videos.length} videos. */}
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
