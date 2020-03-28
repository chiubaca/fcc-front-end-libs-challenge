/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./PomodoroClock.scss";

export default class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.incrementValHandler = this.incrementValHandler.bind(this);
    this.decrementValHandler = this.decrementValHandler.bind(this);
    this.state = {
      sessionLen: 25,
      breakLen: 5,
    };
  }

  incrementValHandler(e) {
    const timerToIncrement = e.target.attributes["data-type"].value;
    console.log(timerToIncrement);
    if (timerToIncrement === "break") {
      this.setState({
        breakLen: this.state.breakLen + 1,
      });
    } else if (timerToIncrement === "session") {
      this.setState({
        sessionLen: this.state.sessionLen + 1,
      });
    }
  }

  decrementValHandler(e) {
    const timerToDecrement = e.target.attributes["data-type"].value;
    console.log(timerToDecrement);
    if (timerToDecrement === "break") {
      this.setState({
        breakLen: this.state.breakLen - 1,
      });
    } else if (timerToDecrement === "session") {
      this.setState({
        sessionLen: this.state.sessionLen - 1,
      });
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

        <div id="timer-label">
          <p>Session</p>
          <div id="time-left">25:00</div>
        </div>

        <div id="pomodoro-controls">
          <button id="start_stop">
            <span role="img" aria-label="start-pause">
              ⏯️
            </span>
          </button>
          <button id="reset">
            <span role="img" aria-label="start-pause">
              🔁
            </span>
          </button>
        </div>
      </main>
    );
  }
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
