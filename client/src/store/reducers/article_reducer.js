// /// ACTION CATH THIS
// const data = {
//   type: "ARTICLE_LIST",
//   payload: [{ id: "1", name: "ARTICLE ITEM" }],
// };

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case "ARTICLE_LIST":
      return action.payload;

    default:
      return state;
  }
}
