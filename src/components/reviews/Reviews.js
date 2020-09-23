import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  mapReviews(){
    //debugger
    return this.props.reviews.map( review => {
      return <Review review={review} deleteReview={this.props.deleteReview} key={review.id}/>
    })
  }

  render() {
    return (
      <ul>
        {this.mapReviews()}
      </ul>
    );
  }
};

export default Reviews;