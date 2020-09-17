import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = this.state.text;
    this.props.addRestaurant(payload);
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Add Restaurant"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
