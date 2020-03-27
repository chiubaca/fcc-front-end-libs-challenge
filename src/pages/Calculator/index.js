import React from "react";
import "./Calculator.scss";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.numberHandler = this.numberHandler.bind(this);
    this.functionHandler = this.functionHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.calculateHandler = this.calculateHandler.bind(this);
    this.state = {
      inputA: "",
      inputB: "",
      function: "",
    };
  }

  numberHandler(e) {
    const value = e.target.textContent;

    if (this.state.function === "") {
      this.setState({
        inputA: this.state.inputA + value,
      });
    } else {
      this.setState({
        inputB: this.state.inputB + value,
      });
    }
  }

  functionHandler(e) {
    const value = e.target.textContent;
    this.setState({
      function: value,
    });
  }

  clearHandler() {
    this.setState({
      inputA: "",
      inputB: "",
      function: "",
    });
  }

  calculateHandler() {
    switch (this.state.function) {
      case "+":
        this.setState({
          inputA: parseInt(this.state.inputA) + parseInt(this.state.inputB),
          inputB: "",
          function: "",
        });
        break;
      case "-":
        this.setState({
          inputA: parseInt(this.state.inputA) - parseInt(this.state.inputB),
          inputB: "",
          function: "",
        });
        break;
      case "/":
        this.setState({
          inputA: parseInt(this.state.inputA) / parseInt(this.state.inputB),
          inputB: "",
          function: "",
        });
        break;
      case "*":
        this.setState({
          inputA: parseInt(this.state.inputA) * parseInt(this.state.inputB),
          inputB: "",
          function: "",
        });
        break;
      default:
        console.log("Invalid!");
        break;
    }
  }

  render() {
    return (
      <main id="calculator">
        <div id="calculator-container">
          <div id="display">
            {/* the display will diplay 0 if  there is no inital inputA*/}
            {this.state.inputA === ""
              ? "0"
              : `${this.state.inputA} ${this.state.function} ${this.state.inputB}`}
          </div>
          <div id="buttons-container">
            <div id="number-container">
              <Number id="nine" value={9} clickHandler={this.numberHandler} />{" "}
              <Number id="eight" value={8} clickHandler={this.numberHandler} />
              <Number id="seven" value={7} clickHandler={this.numberHandler} />
              <Number id="six" value={6} clickHandler={this.numberHandler} />
              <Number id="five" value={5} clickHandler={this.numberHandler} />
              <Number id="four" value={4} clickHandler={this.numberHandler} />
              <Number id="three" value={3} clickHandler={this.numberHandler} />
              <Number id="two" value={2} clickHandler={this.numberHandler} />
              <Number id="one" value={1} clickHandler={this.numberHandler} />
              <Number
                id="decimal"
                value="."
                clickHandler={this.numberHandler}
              />
              <Number id="zero" value={0} clickHandler={this.numberHandler} />
            </div>
            <div id="function-container">
              <button id="clear" onClick={this.clearHandler}>
                C
              </button>
              <Function
                clickHandler={this.functionHandler}
                id="add"
                value="+"
              />
              <Function
                clickHandler={this.functionHandler}
                id="subtract"
                value="-"
              />
              <Function
                clickHandler={this.functionHandler}
                id="multiply"
                value="*"
              />
              <Function
                clickHandler={this.functionHandler}
                id="divide"
                value="/"
              />
              <Function
                clickHandler={this.calculateHandler}
                id="equals"
                value="="
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function Number(props) {
  return (
    <button onClick={props.clickHandler} id={props.id}>
      {props.value}
    </button>
  );
}

function Function(props) {
  return (
    <button onClick={props.clickHandler} id={props.id} value={props.value}>
      {props.value}
    </button>
  );
}

export default Calculator;
