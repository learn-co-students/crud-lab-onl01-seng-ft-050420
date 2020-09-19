import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  // handleOnClick = event => {
  //   event.preventDefault();
  //   this.props.removeRestaurant()
  // }


  render() {
    // const { restaurant } = this.props;
    // debugger;

    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.removeRestaurant(this.props.restaurant.id)}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
