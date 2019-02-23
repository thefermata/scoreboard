import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'Aa', id: 1, score: 0,},
      {name: 'Bb', id: 2, score: 0,},
      {name: 'c', id: 3, score: 0,},
      {name: 'd', id: 4, score: 0,},
    ],
  };
  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  };

  handleChangeScore = (idx, delta) => {
console.log(idx, delta)
    const players = this.state.players.map((player, i)=>{
      if (idx == i) {
        player.score += delta;
      }
      return player;
    });

    this.setState({players});
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={ 1+10 }/>
        {
          this.state.players.map((play, index) => <Player
            name={play.name}
            score={play.score}
            id={play.id}
            key={play.id}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeScore} />)
        }
      </div>
    )
  };
}

export default App;
