import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
  textInput = React.createRef(); // dom reference 할당. 돔에 접근하기 위한 참조값
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };
  }

  handleValueChange = (e) => {
    console.log(e)
    this.setState({
      playerName: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    // 폼초기화
    this.setState({playerName: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter players name" ref={this.textInput}/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}
 // 파라미터 그냥 속성, 함수 속성
export default connect(null, {addPlayer})(AddPlayerForm);  // store 주입, props로 사용할수 있다.