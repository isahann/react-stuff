import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // Avoid doing data loading at the constructor, best if done inside componentDidMount()
  // Good place to do one-time setup
  //   constructor(props) {
  //     super(props);

  //     // The only situation we direct assign a value to this.state
  //     this.state = { lat: null, errorMessage: '' };
  //   }

  // Equivalent to the previous constructor call
  state = { lat: null, errorMessage: '' };

  // Best place to do data-loading
  componentDidMount() {
    console.log('App component rendered to the screen with componentDidMount()');

    // First argument: what happens if executed successfully
    // Second argument: what happens if it gives a error
    window.navigator.geolocation.getCurrentPosition(
      position =>
        // ALWAYS use setState() to update state
        // After the setState() call, it wil rerender the component by the render() method
        this.setState({ lat: position.coords.latitude }),
      err =>
        // console.log(err);
        this.setState({ errorMessage: err.message })
    );
  }

  // Good place to do data-loading when state/props change
  componentDidUpdate() {
    console.log('App component was just updated componentDidUpdate()');
  }

  // Good place to do cleanup (non-react stuff)
  //   componentWillUnmount() {}

  // Required method for class based components
  // Avoid doing anything besides returning JSX
  render() {
    console.log('App component rendered by render()');

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      // setState() will also rerender child components if needed
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading your location, please wait...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
