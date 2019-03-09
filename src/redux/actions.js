// 액션을 만들어줌,

import {UPDATE_TITLE, ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes";

// 타이틀을 받아 액션을 만든다. 액션 creator
export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title: title,  // == title 하나로 써도 됨
  }
}

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name: name,
  }
}


export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id,
  }
}


export const changeScore = (index, score) => {
  return {
    type: CHANGE_SCORE,
    index,
    score,
  }
}