import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // The only situation we direct assign a value to this.state
    this.state = { lat: null };

    // First argument: what happens if executed successfully
    // Second argument: what happens if it gives a error
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // ALWAYS use setState() to update state
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  // Required method for class based components
  render() {
    // console.log('component rendered!');
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
