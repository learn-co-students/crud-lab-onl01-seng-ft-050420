
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReviews(state = [], action){
    switch (action.type){
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.payload.text,
                resturantId: action.payload.restaurantId
            }
            //return {...state, reviews: [...state.reviews, review]}
            return [...state, review]
        case 'DELETE_REVIEW':
            
            const reviews = state.filter(review => review.id !== action.id)
            return reviews
        default: 
            return state
    }
}
