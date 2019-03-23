// Sample Redux Reducer

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    // WRONG!  state should be immutable.  Return a new object which has state's data and new data.
    //state.articles.push(action.payload);

    // assign() and concat() both return new objects/arrays instead of modifying existing ones.
    return Object.assign({}, state, { articles: state.articles.concat(action.payload) });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, { remoteArticles: state.remoteArticles.concat(action.payload) });
  }

  return state;
}

export default rootReducer;