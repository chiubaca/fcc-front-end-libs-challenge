import React from "react";
import "./DrumMachine.scss";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  handleKeyPress(e) {
    switch (e.keyCode) {
      case 81:
        console.log("q");
        break;
      case 87:
        console.log("w");
        break;
      case 69:
        console.log("e");
        break;
      case 65:
        console.log("a");
        break;
      case 83:
        console.log("s");
        break;
      case 68:
        console.log("d");
        break;
      case 90:
        console.log("z");
        break;
      case 88:
        console.log("x");
        break;
      case 67:
        console.log("c");
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <main>
        <div id="drum-machine">
          <div id="display">
            <button
              id="Q"
              className="drum-pad"
              ref={(input) => {
                this.display = input;
              }}
            >
              Q
            </button>
            <button id="W" className="drum-pad">
              W
            </button>
            <button id="E" className="drum-pad">
              E
            </button>
            <button id="A" className="drum-pad">
              A
            </button>
            <button id="S" className="drum-pad">
              S
            </button>
            <button id="D" className="drum-pad">
              D
            </button>
            <button id="Z" className="drum-pad">
              Z
            </button>
            <button id="X" className="drum-pad">
              X
            </button>
            <button id="C" className="drum-pad">
              C
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default DrumMachine;
