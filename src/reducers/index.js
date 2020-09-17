import { combineReducers } from "redux";
import manageRestaurants from "./manageRestaurant";
import manageReviews from "./manageReviews";

export default combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews,
});
