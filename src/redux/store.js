import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, UPDATE_TITLE} from "./actionTypes";

// 초기 state를 만들어 디폴트 매개변수 값으로 처리
const playerInitialState = {
  title: 'STORE scoreboard',
  players: [
    {name: 'Aa', id: 1, score: 0,},
    {name: 'Bb', id: 2, score: 0,},
    {name: 'c', id: 3, score: 0,},
    {name: 'd', id: 4, score: 0,},
  ],
}
let playerId = 4;
const playerReducer = (state = playerInitialState, action) => {
  // 액션의 타입에 따라 분기처리
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        // '새로운' 상태를 리턴한다. deepcopy, spread 연산자. object assign
        ...state,
        title: action.title,    // 타이틀 업데이트 액션이 발생하면 액션의 타이틀 값으로 스테이트를 변경한다.
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {name: action.name, score:0, id: ++playerId}
        ],
      }
    default: return state;
  }
}

const allReducers = combineReducers({playerReducer}) ;//short hand property 문법 키값과 value 명이 동일

export const store= createStore(allReducers,  //  스토어 생성시 playReducer 로 리듀스 한번 실행. 이때 state는 playerInitialState로 초기처리
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);