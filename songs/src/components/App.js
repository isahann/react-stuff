import React from 'react';
import SongList from './SongList';
// When the file is not specified, webpack automatically imports index.js
// If its an named export, you need the curly braces
// import { selectSong } from '../actions';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
