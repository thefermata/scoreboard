import React from 'react';

export class AddPlayerForm extends React.Component {
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