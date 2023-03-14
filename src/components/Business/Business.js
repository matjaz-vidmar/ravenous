import './Business.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg"
            alt=""
          />
        </div>
        <h2>{this.props.address}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.address}</p>
            <p>{this.props.city}</p>
            <p>
              {this.props.state} {business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.category}</h3>
            <h3 className="rating">{this.props.rating}</h3>
            <p>{this.props.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;
