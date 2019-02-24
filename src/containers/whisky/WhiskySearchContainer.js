import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { fetchSearchResults } from '../../store/actions';

class WhiskySearchContainer extends React.Component {
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
      if (query.length % 2 === 0) {
        this.updateWhiskies(query);
      }
    }
  }

  updateWhiskies(query) {
    const q = query.toLowerCase();
    const { allWhiskies, fetchSearchResults } = this.props;
    let { whiskyNames } = this.props;
    whiskyNames = whiskyNames.map(whiskyName => whiskyName.toLowerCase());
    const matches = whiskyNames.filter(whiskyName => whiskyName.includes(q));

    fetchSearchResults(matches, allWhiskies);
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

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
  };
};

WhiskySearchContainer.propTypes = {
  whiskyNames: array.isRequired,
  allWhiskies: array.isRequired,
  fetchSearchResults: func.isRequired,
};

export default connect(mapStateToProps, {
  fetchSearchResults,
})(WhiskySearchContainer);
