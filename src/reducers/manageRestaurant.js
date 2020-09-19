// import cuid from 'cuid';
// export const cuidFn = cuid;

// export default function manageRestaurants(state = [], action){
//     switch (action.type) {
//         case 'ADD_RESTAURANT':
//             const restaurant = {
//                 id: cuid(),
//                 text: action.payload
//             }
//             return [...state, restaurant]
//         case 'DELETE_RESTAURANT':
//             const restaurants = state.filter(restaurant => restaurant.id !== action.id)
//             return restaurants 
//         default: 
//             return state
//     }
// }

import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = { text: action.payload, id: cuidFn() };
      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}

    case 'ADD_REVIEW':
      console.log(action)
      const review = { 
        text: action.payload.text.toString(), 
        restaurantId: action.payload.restaurantId, 
        id: cuidFn() 
      };

      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      console.log('delete action', action)
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state;

  }
};