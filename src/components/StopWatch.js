import React from 'react';

export class StopWatch extends React.Component {
  tickRef;

  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timer: 0,
    };
  }

  // dom이 생성된 직후, 초기화 설정
  componentDidMount() {
    this.tickRef = setInterval(this.tick,1000);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({timer: prevState.timer+1}));
    }
  };

  // dom이 파기되기 직전. 메모리 해제 해야 할것들 처리
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  handleStopWatch = () => {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning,
      }
    });
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>stop watch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopWatch}>{this.state.isRunning? 'Stop' : 'Start'}</button>
        <button onClick={()=>this.setState({timer: 0})}>Reset</button>
      </div>
    );
  }
}