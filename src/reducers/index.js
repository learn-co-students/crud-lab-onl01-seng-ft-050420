import { combineReducers } from 'redux';
import manageRestaurants from './manageRestaurant';
import manageReviews from './manageReview';

export default combineReducers({
    manageRestaurants,
    manageReviews
})