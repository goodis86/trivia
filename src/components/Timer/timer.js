import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 10,
    };
    this.parentPropHandler = this.parentPropHandler.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  componentDidMount() {
    console.log("[CHILD] Timer mounted!");

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
    console.log("[CHILD] Timer unmounted!");
    clearInterval(this.myInterval);
  }

  componentDidUpdate(prevProps) {
    if (this.props.timerReset !== prevProps.timerReset) {                    // checking if our previous props are equal to current props to avoid infinite loop!
      console.log("[CHILD] Timer did update!");                              // if props changed(dataIndex in parent incremented) we run resetTimer!
      this.resetTimer(10);
    }
  }

  resetTimer(data) {
    this.setState({ seconds: data });
  }

  parentPropHandler() {
    this.props.onTimeOut();                 // populate our onTimeOut prop and triggers methods in game component!
  }

  render() {
    console.log("[CHILD] Timer rendered!]");

    const { minutes, seconds } = this.state;
    if (minutes === 0 && seconds === 0) {
      this.resetTimer(10);
      this.parentPropHandler();
    }
    return (
      <div>
        <h1>
          Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    );
  }
}
