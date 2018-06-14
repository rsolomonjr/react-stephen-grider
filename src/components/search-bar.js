import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };

  }

  render() {
    return (
      <div className="search-bar form-group form-inline">
      <label htmlFor="searchInput">SEARCH</label>
       <input
        value = {this.state.term}
        onChange={e => this.onInputChange(e.target.value)}
        name="searchInput"
        placeholder="Type in your Search Terms"
        />
      <h1 className="headerTitle">{this.state.term} videos</h1>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
