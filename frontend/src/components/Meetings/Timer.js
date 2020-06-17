import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    minutes: 3,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  clickedButton = () => {
    console.log('button clcked');
  };

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1>Busted!</h1>
        ) : (
          <h1>
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
        <button onClick={this.clickedButton}>Start</button>
        <button onClick={this.clickedButton}>Stop</button>
        <button onClick={this.clickedButton}>Restart</button>
      </div>
    );
  }
}
