import cuid from 'cuid';
export const cuidFn = cuid;

const Init = [];

export default (state = Init, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.text,
        restaurantId: action.restaurantId,
      };
      return [...state, review];
    case 'UPDATE_REVIEW':
      return state.map((review) => {
        if (review.id === action.id) {
          return { ...review, text: action.text };
        }
        return review;
      });
    case 'DELETE_REVIEW':
      return state.filter((review) => review.id !== action.id);

    default:
      return state;
  }
};
