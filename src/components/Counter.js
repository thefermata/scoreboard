import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players:1,
      score: 0
    }
  }
  incrementScore = ()=> {
    this.setState(prevState => ({ score: prevState.score + 1 }));
  };

  decrementScrore = ()=> {
    this.setState(prevState => ({ score: prevState.score - 1 }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScrore}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}