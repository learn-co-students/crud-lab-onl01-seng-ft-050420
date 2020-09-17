import React, { Component } from 'react';

class Review extends Component {
  render() {
    const { review } = this.props;
    return (
      <div>
        <li>
          {console.log(review)}
          {/* Wtf */}
          {review.text.text}
          <button onClick={() => review.deleteReview(review.id)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
