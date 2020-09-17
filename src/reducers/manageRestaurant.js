import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.payload, id: cuid() };
      return [...state, restaurant];
    case "REMOVE_RESTAURANT":
      return state.filter((x) => x.id !== action.payload);

    default:
      return state;
  }
}
