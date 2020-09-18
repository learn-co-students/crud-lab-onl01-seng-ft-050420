
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReviews(state = { reviews: [] }, action){
    switch (action.type){
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.payload.text,
                resturantId: action.payload.restaurantId
            }
            return {...state, reviews: [...state.reviews, review]}
        case 'DELETE_REVIEW':
            console.log(action)
            const reviews = state.reviews.filter(review => review.id !== action.id)
            return { reviews }
        default: 
            return state
    }
}
