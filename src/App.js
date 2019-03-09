import React from 'react';
import './App.css';
import Header from './components/Header';
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

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

  handleAddPlayer = (name) => {
    this.setState((prevState)=>{
      let maxId = 0;
      this.state.players.forEach(player => maxId = player.id > maxId && player.id);

      return {
        players: [
          ...prevState.players,
          {name, id: maxId+1, score: 0}
        ]
      }
    })
  };

  handleChangeScore = (idx, delta) => {
    const players = this.state.players.map((player, i)=>{
      if (idx === i) {
        player.score += delta;
      }
      return player;
    });

    this.setState({players});
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players}/>
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
        <AddPlayerForm/>
      </div>
    )
  };
}

export default App;
