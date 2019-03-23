// Sample Redux Action Function, with action object with type and payload

import { ADD_ARTICLE } from "../constants/action-types";

// Redux Action Creator
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

// our new action creator. Will it work?
// Not by default, because it return a Promise to return data later async.
/*
export function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      return { type: "DATA_LOADED", payload: json };
    });
}
*/

export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}