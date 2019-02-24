import React from 'react';
import { array, func } from 'prop-types';

class WhiskySearch extends React.Component {
  constructor(props) {
    super(props);
    this.search = React.createRef();
  }

  onKeyDown = (e) => {
    if (e.keyCode === 8) {
      const query = this.search.current.value;

      if (query) {
        this.updateWhiskies(query);
      }
    }
  }

  handleInputChange = () => {
    const query = this.search.current.value;

    if (query && query.length > 1) {
      this.updateWhiskies(query);
    }
  }

  updateWhiskies(query) {
    const q = query.toLowerCase();
    const { whiskies, fetchSearchResults } = this.props;
    let { whiskyNames } = this.props;
    whiskyNames = whiskyNames.map(whiskyName => whiskyName.toLowerCase());
    const matches = whiskyNames.filter(whiskyName => whiskyName.includes(q));

    fetchSearchResults(matches, whiskies);
  }

  render() {
    return (
      <form className="search">
        <input
          ref={this.search}
          placeholder="Search for a whisky..."
          onChange={this.handleInputChange}
          onKeyDown={this.onKeyDown}
        />
      </form>
    );
  }
}

WhiskySearch.propTypes = {
  whiskyNames: array.isRequired,
  whiskies: array.isRequired,
  fetchSearchResults: func.isRequired,
};

export default WhiskySearch;
