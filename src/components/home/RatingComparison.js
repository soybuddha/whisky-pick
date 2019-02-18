import React from 'react';
import { object } from 'prop-types';

class RatingComparison extends React.Component {
  constructor(props) {
    super(props);
    this.saveRef = React.createRef();
  }

  state = {
    inView: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.saveRef.current.getBoundingClientRect().top < window.innerHeight) {
      this.setState({
        inView: true,
      });
    }
  }

  render() {
    const { favorites } = this.props;

    return (
      <div
        className="featured rating-comparison"
        ref={this.saveRef}
      >
        <h2>Average ratings by whisky type</h2>

        {Object.keys(favorites).map(key => (
          <div className="rating-comparison-item" key={favorites[key].id}>
            <h3>{favorites[key].name}</h3>
            <div className="comparison-bar">
              <div className={`${this.state.inView ? 'visible' : ''} comparison-outer`} style={{ width: '100%' }}>
                <div className="comparison-inner" style={{ width: `${favorites[key].average_rating}%` }} />
                <p style={{ left: `${favorites[key].average_rating}%` }}>
                  {favorites[key].average_rating}
                  %
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

RatingComparison.propTypes = {
  favorites: object.isRequired,
};

export default RatingComparison;
