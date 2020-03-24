import React from "react";
import "./DrumMachine.scss";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.lookupKeyPress = this.lookupKeyPress.bind(this);
  }

  keyPressLookup = {
    113: {
      key: "q",
      handleKeyPress: this.handleKeyPress,
      clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    119: {
      key: "w",
      handleKeyPress: this.handleKeyPress,
    },
    101: {
      key: "e",
      handleKeyPress: this.handleKeyPress,
    },
    115: {
      key: "a",
      handleKeyPress: this.handleKeyPress,
    },
    100: {
      key: "s",
      handleKeyPress: this.handleKeyPress,
    },
    122: {
      key: "z",
      handleKeyPress: this.handleKeyPress,
    },
    120: {
      key: "x",
      handleKeyPress: this.handleKeyPress,
    },
    99: {
      key: "c",
      handleKeyPress: this.handleKeyPress,
    },
  };

  // Checks to see if the key pressed is something we have assigend an action to in the keyPressLookup object
  // if so pass in the relvant args to perform an action within its selc contained object
  lookupKeyPress(e) {
    if (this.keyPressLookup[e.charCode]) {
      let key = this.keyPressLookup[e.charCode].key;
      this.keyPressLookup[e.charCode].handleKeyPress(key);
    }
  }

  //key press handler used in keyPressLookup object
  handleKeyPress(keyPressed) {
    console.log(`Pressed ${keyPressed}`);
  }

  render() {
    return (
      <main>
        <div id="drum-machine">
          <div id="display">
            <button
              id="Q"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}

            >
              Q
              <audio
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
            </button>
            <button
              id="W"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
            >
              W
            </button>
            <button
              id="E"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
            >
              E
            </button>
            <button
              id="A"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
            >
              A
            </button>
            <button
              id="S"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
            >
              S
            </button>
            <button
              id="D"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
            >
              D
            </button>
            <button
              id="Z"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
            >
              Z
            </button>
            <button
              id="X"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
            >
              X
            </button>
            <button
              id="C"
              className="drum-pad"
              onKeyPress={this.lookupKeyPress}
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
