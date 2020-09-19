import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews(){
    console.log(this.props.reviews)
    return this.props.reviews.map( review => {
      return <Review review={review} removeReview={this.props.removeReview} key={review.id}/>
    })
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;