import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

class Player extends React.Component {
  render() {
    const {id, name, removePlayer, score} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className="player-name">
        {name}
        </span>
        <Counter score={score} index={id}/>
      </div>
    );
  }

  // 변경사항이 있을때만 업데이트 처리
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // true, false를 리턴 해야한다. true면 렌더링하라. false면 렌더링 하지마라
    console.log('shouldupdate', nextProps)
    return nextProps.score !== this.props.score;
  }
}

export default connect(null, {removePlayer})(Player);