import React, { Component } from "react";

class ReviewInput extends Component {
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
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId,
    };
    this.props.addReview(review);
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
            placeholder="Leave A Review"
            value={this.state.text}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
