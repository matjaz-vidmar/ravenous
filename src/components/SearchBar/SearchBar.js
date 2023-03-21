import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortby: sortByOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }
  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy,
    );
    event.preventDefault();
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <div
          role="button"
          tabIndex={0}
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          onKeyDown={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.handleSortByChange}
            placeholder="Search Businesses"
          />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button onKeyDown={this.handleSearch} onClick={this.handleSearch}>
            Let's Go
          </button>
        </div>
      </div>
    );
  }
}
export default SearchBar;
