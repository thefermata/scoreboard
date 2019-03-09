import React from 'react';
import Statistics from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

const Header = ({players, title, changeTitle}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1 onClick={changeTitle}>{title}</h1>
      <StopWatch />
    </header>
  );
};

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}
Header.defaultProps = {
  title: 'Score'
}

let mapStateToProps = (state)=>{  //스토어에 있는 props를 스테이트에 매핑
  return {
    title: state.playerReducer.title,
  }
};

// action 을 dispatch 하는 function 을  props로 매핑한다.
let mapActionToProps = (dispatch) => {
  return {
    changeTitle: (title) => dispatch(updateTitle('testtest'))  // 액션 creator인 updateTitle을 넘겨주면 리턴되는 액션을 처리.
  }
};

// react redux의 connect를 이용하여 mapStateToProps를 받아(함수를 리턴), 앱(여기서는 Header)으로 리턴
export default connect(mapStateToProps, mapActionToProps)(Header);