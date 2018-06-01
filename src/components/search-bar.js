import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar form-group form-inline">
      <label for="searchInput">SEARCH</label>
       <input
        value = {this.state.term}
        onChange={e => this.onInputChange(e.target.value)}
        name="searchInput"
        />

      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
