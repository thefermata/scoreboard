import React from 'react';

export class AddPlayerForm extends React.Component {
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
    console.log(e);
    e.preventDefault();
    this.props.addPlayer(this.state.playerName);
    this.setState({
      playerName: ''
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter players name" value={this.state.playerName} onChange={this.handleValueChange}/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}