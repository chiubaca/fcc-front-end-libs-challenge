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
      name: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    119: {
      id: "W",
      handleKeyPress: this.handleKeyPress,
      name: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    101: {
      id: "E",
      handleKeyPress: this.handleKeyPress,
      name: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    97: {
      id: "A",
      handleKeyPress: this.handleKeyPress,
      name: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    115: {
      id: "S",
      handleKeyPress: this.handleKeyPress,
      name: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    100: {
      id: "D",
      handleKeyPress: this.handleKeyPress,
      name: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    122: {
      id: "Z",
      handleKeyPress: this.handleKeyPress,
      name: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    120: {
      id: "X",
      handleKeyPress: this.handleKeyPress,
      name: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    99: {
      id: "C",
      handleKeyPress: this.handleKeyPress,
      name: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
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
    //the audio tag should be always be direct child of the
    const sound = document.getElementById(keyPressed).childNodes[0];
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
              soundClip={this.keyPressLookup[113].url}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[119].id}
              soundClip={this.keyPressLookup[119].url}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[101].id}
              soundClip={this.keyPressLookup[101].url}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[97].id}
              soundClip={this.keyPressLookup[97].url}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[115].id}
              soundClip={this.keyPressLookup[115].url}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[100].id}
              soundClip={this.keyPressLookup[100].url}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[122].id}
              soundClip={this.keyPressLookup[122].url}
            />
            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[120].id}
              soundClip={this.keyPressLookup[120].url}
            />

            <DrumPad
              keyPress={this.lookupKeyPress}
              id={this.keyPressLookup[99].id}
              soundClip={this.keyPressLookup[99].url}
            />
          </div>
        </div>
      </main>
    );
  }
}

function DrumPad(props) {
  return (
    <button
      id={props.id}
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
