import React, { Component } from 'react';
import Review from './Review';


class Reviews extends Component {
  handleDelete = (id) => {
    this.props.deleteReview(id)
  }

  render() {
    return (
      <ul>
        {this.props.reviews.map(review => 
          <Review handleDelete={() => this.handleDelete(review.id)} key={review.id} review={review}/>
        )}
      </ul>
    );
  }
};


export default Reviews;