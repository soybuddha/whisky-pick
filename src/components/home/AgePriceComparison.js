import React from 'react';
import { object } from 'prop-types';

class AgePriceComparison extends React.Component {
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
        className={`${this.state.inView ? 'visible' : ''} featured age-price-comparison`}
        ref={this.saveRef}
      >
        <h2>Average price vs. age</h2>

        {Object.keys(favorites).map(key => (
          <div className="age-price-comparison-item" key={favorites[key].id}>
            <h3>{favorites[key].name}</h3>
            <div className="age-price-comparison-detail">
              <div className="price-comparison-detail-card">
                <h4>
                  $
                  {favorites[key].average_price}
                </h4>
                <p>Average Price</p>
              </div>
              <div className="age-comparison-detail-card">
                <h4>
                  {favorites[key].average_age}
                  &nbsp;yrs.
                </h4>
                <p>Average Age</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

AgePriceComparison.propTypes = {
  favorites: object.isRequired,
};

export default AgePriceComparison;
