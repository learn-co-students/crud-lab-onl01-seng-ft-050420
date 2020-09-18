import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';
//restaurant={this.props.restaurant}
class ReviewsContainer extends Component {

  render() {
    
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/> 
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (payload) => {
      dispatch({type: 'ADD_REVIEW', payload})
    },
    deleteReview: (id) => {
      dispatch({type: 'DELETE_REVIEW', id})
    }
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
