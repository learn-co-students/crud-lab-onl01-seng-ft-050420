import cuid from "cuid";
export const cuidFn = cuid;

export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_REVIEW":
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId,
      };
      return [...state, review];
    case "UPDATE_REVIEW":
      return state.map((review) => {
        if (review.id !== action.id) {
          return review;
        }

        return { ...review, text: action.text };
      });
    case "DELETE_REVIEW":
      return state.filter((review) => review.id !== action.payload);

    default:
      return state;
  }
};
