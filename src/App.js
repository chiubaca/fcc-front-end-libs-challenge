import React from "react";
import Home from "./pages/Home";
import RandomQuoteMachine from "./pages/RandomQuoteMachine";
import MarkdownPreviewer from "./pages/MarkdownPreviewer";
import DrumMachine from "./pages/DrumMachine";
import Calculator from "./pages/Calculator";
import PomodoroClock from "./pages/PomodoroClock";
import GithubCorner from "./components/GithubCorner";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return <Nav />;
}

function Nav() {
  return (
    <>
      <GithubCorner
        url={"https://github.com/chiubaca/fcc-front-end-libs-challenge"}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/random-quote-machine">
            <RandomQuoteMachine />
          </Route>
          <Route path="/markdown-previewer">
            <MarkdownPreviewer />
          </Route>
          <Route path="/drum-machine">
            <DrumMachine />
          </Route>
          <Route path="/js-calculator">
            <Calculator />
          </Route>
          <Route path="/pomodoro-clock">
            <PomodoroClock />
          </Route>
        </Switch>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/random-quote-machine">Random Quote Machine</Link>
            </li>
            <li>
              <Link to="/markdown-previewer">Markdown Previewer</Link>
            </li>
            <li>
              <Link to="/drum-machine">Drum Machine</Link>
            </li>
            <li>
              <Link to="/js-calculator">JS Calculator</Link>
            </li>
            <li>
              <Link to="/pomodoro-clock">Pomodoro Clock</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </>
  );
}

export default App;
