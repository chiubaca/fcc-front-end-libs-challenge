import React from "react";
import "./DrumMachine.scss";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    // console.log("key press!", e.charCode);
    switch (e.charCode) {
      case 113:
        console.log("q");
        console.log(this.qButton);
        this.qButton.click();
        break;
      case 119:
        console.log("w");
        break;
      case 101:
        console.log("e");
        break;
      case 97:
        console.log("a");
        break;
      case 115:
        console.log("s");
        break;
      case 100:
        console.log("d");
        break;
      case 122:
        console.log("z");
        break;
      case 120:
        console.log("x");
        break;
      case 99:
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
              onKeyPress={this.handleKeyPress}
              ref={input => this.qButton = input}
            >
              Q
            </button>
            <button
              id="W"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              W
            </button>
            <button
              id="E"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              E
            </button>
            <button
              id="A"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              A
            </button>
            <button
              id="S"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              S
            </button>
            <button
              id="D"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              D
            </button>
            <button
              id="Z"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              Z
            </button>
            <button
              id="X"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              X
            </button>
            <button
              id="C"
              className="drum-pad"
              onKeyPress={this.handleKeyPress}
            >
              C
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default DrumMachine;
