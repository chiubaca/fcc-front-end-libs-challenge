import React from "react";
import "./DrumMachine.scss";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Hit me!",
    };
    this.lookupKeyPress = this.lookupKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  keyPressLookup = {
    Q: {
      name: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    W: {
      name: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    E: {
      name: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    A: {
      name: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    S: {
      name: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    D: {
      name: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    Z: {
      name: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    X: {
      name: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    C: {
      name: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  };

  // TODO: Bring focus on the button on initialisation
  componentDidMount() {
    this.focus();
  }

  focus() {
    // once a single button is focused the app can listen to other button event
    document.getElementById("Q").focus();
  }

  /**
   *
   * @param {String} keyPressed - id of element
   */
  showActiveDrumPad(keyPressed) {
    const button = document.getElementById(keyPressed);
    button.classList.add("active");

    setTimeout(() => {
      button.classList.remove("active");
    }, 200);
  }

  // Checks to see if the key pressed is something we have assigend an action to in the keyPressLookup object
  // if so pass in the relvant args to perform an action within its selc contained object
  lookupKeyPress(e) {
    const key = e.key.toUpperCase();
    if (this.keyPressLookup[key]) {
      this.emitSound(key);
      this.showActiveDrumPad(key);
      this.setState({ display: this.keyPressLookup[key].name });
    }
  }

  //key press handler used in keyPressLookup object
  emitSound(keyPressed) {
    //the audio tag should be always be direct child of the button element
    const sound = document.getElementById(keyPressed).childNodes[0];
    sound.play();
  }

  handleClick(e) {
    const sound = e.target.childNodes[0];
    const soundName = e.target.childNodes[0].attributes["data-clip-name"].value;
    sound.play(e.target.childNodes[0].attributes["id"].value);
    this.showActiveDrumPad(e.target.childNodes[0].attributes["id"].value);
    this.setState({ display: soundName });
  }

  render() {
    return (
      <main onClick={this.focus}>
        <div id="drum-machine">
          <div id="display">{this.state.display}</div>
          <div id="drum-pads-container">
            <DrumPad
              name={this.keyPressLookup["Q"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="Q"
              soundClip={this.keyPressLookup["Q"].url}
            />
            <DrumPad
              name={this.keyPressLookup["W"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="W"
              soundClip={this.keyPressLookup["W"].url}
            />
            <DrumPad
              name={this.keyPressLookup["E"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="E"
              soundClip={this.keyPressLookup["E"].url}
            />
            <DrumPad
              name={this.keyPressLookup["A"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="A"
              soundClip={this.keyPressLookup["A"].url}
            />
            <DrumPad
              name={this.keyPressLookup["S"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="S"
              soundClip={this.keyPressLookup["S"].url}
            />
            <DrumPad
              name={this.keyPressLookup["D"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="D"
              soundClip={this.keyPressLookup["D"].url}
            />
            <DrumPad
              name={this.keyPressLookup["Z"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="Z"
              soundClip={this.keyPressLookup["Z"].url}
            />
            <DrumPad
              name={this.keyPressLookup["X"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="X"
              soundClip={this.keyPressLookup["X"].url}
            />

            <DrumPad
              name={this.keyPressLookup["C"].name}
              click={this.handleClick}
              keyPress={this.lookupKeyPress}
              id="C"
              soundClip={this.keyPressLookup["C"].url}
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
      onKeyDown={props.keyPress}
      onClick={props.click}
    >
      <audio
        id={props.id}
        className="clip"
        data-clip-name={props.name}
        src={props.soundClip}
      >
        {props.id}
      </audio>
      {props.id}
    </button>
  );
}

export default DrumMachine;
