import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>
        {
          this.props.players.map((play, index) => <Player
            name={play.name}
            score={play.score}
            id={play.id}
            key={play.id}
            index={index} />)
        }
        <AddPlayerForm/>
      </div>
    )
  };
}

let mapStateToProps = (state) => ({
  players: state.playerReducer.players,
});

export default connect(mapStateToProps)(App);
