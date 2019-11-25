import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  // Arrow function prevents scope error
  onFormSubmit(event) {
    // Prevent form default behavior
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        {/* Event handlers does not need parenthesis, 
        however, the method definition must receive the "event" argument */}
        <form className="ui form" onSubmit={e => this.onFormSubmit(e)}>
          <div className="field">
            <label htmlFor="search">Image search</label>
            <input
              id="search"
              type="text"
              placeholder="Type in something..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
