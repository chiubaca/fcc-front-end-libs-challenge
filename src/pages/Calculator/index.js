import React from "react";
import "./Calculator.scss";

class Calculator extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <main id="calculator">
        <div id="calculator-container">
          <div id="number-container">
            <Number id="nine" value={9} /> <Number id="eigth" value={8} />
            <Number id="seven" value={7} />
            <Number id="six" value={6} /> <Number id="five" value={5} />
            <Number id="four" value={4} />
            <Number id="three" value={3} /> <Number id="two" value={2} />
            <Number id="one" value={1} />
            <Number id="decimal" value="." /> <Number id="zero" value={0} />
          </div>
          <div id="function-container">
            <Function id="clear" value="C" />
            <Function id="add" value="+" />
            <Function id="subtract" value="-" />
            <Function id="multiply" value="*" />
            <Function id="divide" value="/" />
          </div>
        </div>
      </main>
    );
  }
}

function Number(props) {
  return <button id={props.id}>{props.value}</button>;
}

function Function(props) {
  return <button id={props.id}>{props.value}</button>;
}

export default Calculator;
