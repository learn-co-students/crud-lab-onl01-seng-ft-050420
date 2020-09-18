import cuid from 'cuid';

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {text: action.text, id: cuid()};
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case "DELETE_RESTAURANT": 
            const restaurants = state.restaurants.filter(el => el.id !== action.id);
            return {...state, restaurants: restaurants};
        case "ADD_REVIEW":
            return {...state, reviews: [...state.reviews, action.review]};
        case "DELETE_REVIEW":
            
            const reviews = state.reviews.filter(el => el.text !== action.review.text);
           
            return {...state, reviews }
        default:
            return state;
    }
}
