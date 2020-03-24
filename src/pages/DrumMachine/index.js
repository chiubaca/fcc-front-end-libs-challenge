import React from "react";
import "./DrumMachine.scss";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.lookupKeyPress = this.lookupKeyPress.bind(this);
  }

  keyPressLookup = {
    113: {
      id: "Q",
      handleKeyPress: this.handleKeyPress,
      clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    119: {
      id: "W",
      handleKeyPress: this.handleKeyPress,
    },
    101: {
      id: "E",
      handleKeyPress: this.handleKeyPress,
    },
    97: {
      id: "A",
      handleKeyPress: this.handleKeyPress,
    },
    115: {
      id: "S",
      handleKeyPress: this.handleKeyPress,
    },
    100: {
      id: "D",
      handleKeyPress: this.handleKeyPress,
    },
    122: {
      id: "Z",
      handleKeyPress: this.handleKeyPress,
    },
    120: {
      id: "X",
      handleKeyPress: this.handleKeyPress,
    },
    99: {
      id: "C",
      handleKeyPress: this.handleKeyPress,
    },
  };

  // Checks to see if the key pressed is something we have assigend an action to in the keyPressLookup object
  // if so pass in the relvant args to perform an action within its selc contained object
  lookupKeyPress(e) {
    if (this.keyPressLookup[e.charCode]) {
      let key = this.keyPressLookup[e.charCode].id;
      this.keyPressLookup[e.charCode].handleKeyPress(key);
    }
  }

  //key press handler used in keyPressLookup object
  handleKeyPress(keyPressed) {
    console.log(`Pressed ${keyPressed}`);
    const sound = document.getElementById(keyPressed);
    sound.play();
  }

  render() {
    return (
      <main>
        <div id="drum-machine">
          <div id="display">
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[113].id}
              soundClip={this.keyPressLookup[113].clip}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[119].id}
              soundClip={this.keyPressLookup[119].clip}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[101].id}
              soundClip={this.keyPressLookup[101].clip}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[97].id}
              soundClip={this.keyPressLookup[97].clip}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[115].id}
              soundClip={this.keyPressLookup[115].clip}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[100].id}
              soundClip={this.keyPressLookup[100].clip}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[122].id}
              soundClip={this.keyPressLookup[122].clip}
            />
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

function DrumPad(props) {
  return (
    <button
      className="drum-pad"
      onKeyPress={props.keyPress}
      onClick={props.keyPress}
    >
      <audio id={props.id} className="clip" src={props.soundClip}></audio>
      {props.id}
    </button>
  );
}

export default DrumMachine;
