/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./PomodoroClock.scss";

export default class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.incrementValHandler = this.incrementValHandler.bind(this);
    this.decrementValHandler = this.decrementValHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.countdownDisplay = this.countdownDisplay.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.startStopCountDown = this.startStopCountDown.bind(this);
    this.state = {
      sessionLen: 25,
      breakLen: 5,
      timerInSecs: 1500, // 1500 second in 25 mins which is the default
      timerState: "STOPPED",
    };
  }

  incrementValHandler(e) {
    const timerToIncrement = e.target.attributes["data-type"].value;
    if (timerToIncrement === "break") {
      if (this.state.breakLen === 60) {
        return;
      }
      this.setState({
        breakLen: this.state.breakLen + 1,
      });
    } else if (timerToIncrement === "session") {
      if (this.state.sessionLen === 60) {
        return;
      }
      this.setState({
        sessionLen: this.state.sessionLen + 1,
      });
    }
  }

  decrementValHandler(e) {
    const timerToDecrement = e.target.attributes["data-type"].value;
    if (timerToDecrement === "break") {
      if (this.state.breakLen === 1) {
        return;
      }
      this.setState({
        breakLen: this.state.breakLen - 1,
      });
    } else if (timerToDecrement === "session") {
      if (this.state.sessionLen === 1) {
        return;
      }
      this.setState({
        sessionLen: this.state.sessionLen - 1,
      });
    }
  }

  resetHandler() {
    this.stopTimer();
    this.setState({
      sessionLen: 25,
      breakLen: 5,
    });
  }

  countdownDisplay() {
    //convert timer seconds to minutes - Math.Floor, rounds a float down to an Int
    let minutes = Math.floor(this.state.timerInSecs / 60);
    // work out seconds by converting remaining mins back to seconds, then minus this by remaining seconds.
    let seconds = this.state.timerInSecs - minutes * 60;

    //append a 0 to keep the MM:SS format
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    console.log(`${minutes}:${seconds}`);
    return `${minutes}:${seconds}`;
  }

  startTimer() {
    let ID;
    ID = setInterval(() => {
      this.setState({
        timerInSecs: this.state.timerInSecs - 1,
        timerState: "STARTED",
        intervalID: ID,
      });
    }, 1000);
  }

  stopTimer() {
    this.setState({
      timerState: "STOPPED",
    });
    clearInterval(this.state.intervalID);
  }

  startStopCountDown() {
    if (this.state.timerState === "STOPPED") {
      this.startTimer();
    } else if (this.state.timerState === "STARTED") {
      this.stopTimer();
    }
  }

  render() {
    return (
      <main id="pomodoro-clock">
        <h1>Pomodoro Timer</h1>

        <div id="controls-container">
          <TimerControls
            name="break"
            decrementTime={this.decrementValHandler}
            incrementTime={this.incrementValHandler}
            time={this.state.breakLen}
          />
          <TimerControls
            name="session"
            decrementTime={this.decrementValHandler}
            incrementTime={this.incrementValHandler}
            time={this.state.sessionLen}
          />
        </div>

        <Timer timer={this.countdownDisplay()} />

        <div id="pomodoro-controls">
          <button id="start_stop" onClick={this.startStopCountDown}>
            ⏯️
          </button>
          <button id="reset" onClick={this.resetHandler}>
            🔁
          </button>
        </div>
      </main>
    );
  }
}

function Timer(props) {
  return (
    <div id="timer-label">
      <p>Session</p>
      <div id="time-left">{props.timer}</div>
    </div>
  );
}

function TimerControls(props) {
  return (
    <div className="length-controls">
      <p id={props.name + "-label"}>{props.name} length</p>
      <div>
        <button
          id={props.name + "-decrement"}
          data-type={props.name}
          onClick={props.decrementTime}
        >
          🔽
        </button>
        <div id={props.name + "-length"}>{props.time}</div>
        <button
          id={props.name + "-increment"}
          data-type={props.name}
          onClick={props.incrementTime}
        >
          🔼
        </button>
      </div>
    </div>
  );
}
