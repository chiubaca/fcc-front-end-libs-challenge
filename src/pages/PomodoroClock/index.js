import React from "react";
import "./PomodoroClock.scss";

export default function RandomQuoteMachine() {
  return (
    <main id="pomodoro-clock">
      <h1>Pomodoro Timer</h1>

      <div id="controls-container">
        <div class="length-controls">
          <p id="break-label">Break Length</p>
          <div>
            <button id="break-decrement">
              <span role="img" aria-label="decrement">
                🔽
              </span>
            </button>
            <div id="break-length">5</div>
            <button id="break-increment">
              <span role="img" aria-label="increment">
                🔼
              </span>
            </button>
          </div>
        </div>

        <div class="length-controls">
          <p id="session-label"> Session Length </p>
          <div>
            <button id="session-decrement">
              <span role="img" aria-label="decrement">
                🔽
              </span>
            </button>
            <div id="session-length">25</div>
            <button id="session-increment">
              <span role="img" aria-label="increment">
                🔼
              </span>
            </button>
          </div>
        </div>
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
