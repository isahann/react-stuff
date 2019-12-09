import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="content">{song.title}</div>

          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Sets up the state of redux store inside the props of this component
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

// The connect() function connects this component with the redux store provider,
// at the very top of our application
// The selectSong action will be passed as props tho the component aswell,
// and as an argument to the connect() function so that redux uses it to the dispatch function
export default connect(mapStateToProps, { selectSong })(SongList);
