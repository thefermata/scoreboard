import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Statistics = (props) => {
  const totalPlayers = props.players.length;
  let totalScore = 0;
  props.players.forEach(player=>totalScore += player.score);
  return (
    <table>
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Score:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
};

Statistics.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};

let mapPropsToState = (state) => {
  return {
    storeplayers: state.playerReducer.players,  //state의 players를 storeplayer라는 props로 내려받겠다.
  }
}
export default connect(mapPropsToState)(Statistics);