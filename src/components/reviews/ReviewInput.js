import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
    //restaurantId: ''
  }

  handleOnChange = (event) => { 
    //const restId = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    this.setState({
      text: event.target.value
      //restaurantId: this.props.restaurant.id,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id})
    this.setState({
      text: ''
      //restaurantId: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleOnChange} type='text' name='name' value={this.state.text}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
