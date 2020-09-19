import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            const restaurant = { id: cuid(), text: action.payload }
            return { ...state, restaurants: [...state.restaurants, restaurant]}
        case 'REMOVE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter( restaurant => restaurant.id !== action.payload)}
        case 'ADD_REVIEW':
            const review = { id: cuid(), text: action.payload.text, restaurantId: action.payload.restaurantId }
            return { ...state, reviews: [...state.reviews, review]}
        case 'REMOVE_REVIEW':
            return { ...state, reviews: state.reviews.filter( review => review.id !== action.payload ) }
        default:
            return state;
    }
}
