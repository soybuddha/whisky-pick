import React from 'react';
import { array, bool, func } from 'prop-types';
import Loading from '../common/Loading';

class WhiskyFilters extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isLoading: this.props.isLoading,
    activeProfiles: this.props.profiles,
    activeTypes: this.props.types,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isLoading !== state.isLoading) {
      return {
        isLoading: props.isLoading,
        activeProfiles: props.profiles,
        activeTypes: props.types,
      };
    }
    return null;
  }

  handleClick(profile, activeProfiles, type, activeTypes) {
    const {
      whiskies,
      filterWhiskies,
    } = this.props;

    const updatedActiveProfiles = (activeProfiles.includes(profile))
      ? activeProfiles.filter(p => p !== profile)
      : [profile, ...activeProfiles];

    const updatedActiveTypes = (activeTypes.includes(type))
      ? activeTypes.filter(p => p !== type)
      : [type, ...activeTypes];

    filterWhiskies(updatedActiveProfiles, updatedActiveTypes, whiskies);

    this.setState(prevState => ({
      ...prevState,
      activeProfiles: updatedActiveProfiles,
      activeTypes: updatedActiveTypes,
    }));
  }

  render() {
    const { isLoading, profiles, types } = this.props;
    const { activeProfiles, activeTypes } = this.state;

    return (
      <div className="filters">
        {(isLoading)
          ? <Loading />
          : (
            <>
              <div className="filters-list filters-types-list">
                <h2>Whisky Types</h2>
                {types.map(type => (
                  <button
                    type="button"
                    key={type}
                    className={`${activeTypes.includes(type) ? 'active ' : 'inactive '}filters-type`}
                    onClick={() => this.handleClick(activeProfiles, activeProfiles, type, activeTypes)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="filters-list filters-profiles-list">
                <h2>Taste Profiles</h2>
                {profiles.map(profile => (
                  <button
                    type="button"
                    key={profile}
                    className={`${activeProfiles.includes(profile) ? 'active ' : 'inactive '}filters-profile`}
                    onClick={() => this.handleClick(profile, activeProfiles, activeTypes, activeTypes)}
                  >
                    {profile}
                  </button>
                ))}
              </div>
            </>
          )
        }
      </div>
    );
  }
}

WhiskyFilters.propTypes = {
  isLoading: bool.isRequired,
  profiles: array.isRequired,
  types: array.isRequired,
  whiskies: array.isRequired,
  filterWhiskies: func.isRequired,
};

export default WhiskyFilters;
