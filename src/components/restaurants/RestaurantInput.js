import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleOnChange} name='name' type='text' value={this.state.text}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
