import React, { Component } from 'react';


class ReviewInput extends Component {
  state = {
    text: '',
    
  }

  handleChange = event => {
    this.setState({text: event.target.value})
  }
  
  handleSubmit = event => {
    console.log("test")
    event.preventDefault();
    this.props.addReview( {text: this.state.text, restaurantId: this.props.restaurantId} )
    this.setState({text: ''})
  }

  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
      
    );
  }
};

export default ReviewInput;