import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const review = {
        text: this.state.text, 
        restaurantId: this.props.restaurantId 
      }
    this.props.addReview(review)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter Review' onChange={ (e) => this.handleChange(e) } /> 
          <input type='submit' value='>>'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
