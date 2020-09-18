import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  

  render() {
    
    const { restaurant } = this.props;

    return (
      <div id={restaurant.id} className='rest-id'>
        <li>
          {restaurant.text}
          <button onClick={this.props.handleDelete}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
