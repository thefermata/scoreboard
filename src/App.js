import React, { Component } from 'react';
import './App.css';

/*const title = React.createElement(
  'h1',
  {id: 'main-title', 'title': 'This is a title'},
  'MyFirst element'
);*/
//
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">players: {props.totalPlayers}</span>
    </header>
  );
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      players:1,
      score: 0
    }
  }
  incrementScore = ()=> {
    this.setState(prevState => ({ score: prevState.score + 1 }));
  };

  decrementScrore = ()=> {
    this.setState(prevState => ({ score: prevState.score - 1 }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScrore}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}
/*
class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(props.id)}>x</button>
        </span>
        <span className="player-name">{props.name}</span>
        <Counter score={props.score}/>
      </div>
    )
  }
}*/

const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter />
    </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      {name: 'aaa', id: 1},
      {name: 'bbb', id: 2},
      {name: 'ccc', id: 3},
      {name: 'ddd', id: 4},
    ],
  };
  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={ 1+10 }/>
        {
          this.state.players.map(play => <Player name={play.name} score={play.score} id={play.id} key={play.id} removePlayer={this.handleRemovePlayer} />)
        }
      </div>
    )
  };
}

export default App;
