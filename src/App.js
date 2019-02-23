import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'Aa', id: 1},
      {name: 'Bb', id: 2},
      {name: 'c', id: 3},
      {name: 'd', id: 4},
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
