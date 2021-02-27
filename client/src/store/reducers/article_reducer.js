// /// ACTION CATH THIS
// const data = {
//   type: "ARTICLE_LIST",
//   payload: [{ id: "1", name: "ARTICLE ITEM" }],
// };
import { ARTICLE_LIST, ARTICLE_DATA, GET_USER } from "../types";

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case ARTICLE_LIST:
      return { ...state, articleList: action.payload };
    case ARTICLE_DATA:
      return { ...state, articleData: action.payload };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
