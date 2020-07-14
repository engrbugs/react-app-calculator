/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Converter from "./Converter";

const SVG = (props) => (
  // Thank you, https://squircley.app !!!
  <svg
    width="50px"
    height="50px"
    id={props.id}
    stroke={props.stroke}
    fill={props.fill}
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id={props.id}
      d="M 0, 75
      C 0, 18.75 18.75, 0 75, 0
      S 150, 18.75 150, 75
      131.25, 150 75, 150
      0, 131.25 0, 75"
    ></path>
  </svg>
);

function Numbers(props) {
  return (
    <div class="button-center" id={Converter(props.id)} onClick={props.numbers}>
      <SVG stroke="#b2bec3" fill="#FAFAFA" id={props.id} />
      <a>{props.id}</a>
    </div>
  );
}

function Special(props) {
  return (
    <div
      className={`button-special ${props.id === "Nan" && "nan"}`}
      id={Converter(props.id)}
      onClick={props.skills}
    >
      <SVG stroke="#fab1a0" fill="#d63031" />
      <a>{props.id}</a>
    </div>
  );
}

function Math(props) {
  return (
    <div
      class={props.id === "=" ? "button-math-equals" : "button-math"}
      id={Converter(props.id)}
      onClick={props.function}
    >
      <SVG
        stroke={props.id === "=" ? "#c8d6e5" : "#74b9ff"}
        fill={props.id === "=" ? "#4185f4" : "#FAFAFA"}
        id={props.id}
      />
      <a>{props.id}</a>
    </div>
  );
}

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('0');
  const [formula, setFormula] = useState('');
  

  function reset() {
    setCurrentDisplay("0");
  }

  function handleNumbers(e) {
    const value = e.target.innerText ? e.target.innerText : e.target.id;
    setCurrentDisplay(currentDisplay === "0" ? value : currentDisplay + value);
    if (currentDisplay.length > 9) {
      maxLimitError();
    }
  }

  function mathematicsOperations(e) {
    const value = e.target.innerText ? e.target.innerText : e.target.id;
  }

  function maxLimitError() {
    setCurrentDisplay("LIMIT ERROR");
  }

  function inputDot() {
    if (!/\.|LIMIT ERROR/.test(currentDisplay)) {
      setCurrentDisplay(currentDisplay + ".");
    }
  }

  return (
    <div className="calculator">
      <div id="equation" className="equation">
        8 x 8 + 9
      </div>
      <div id="display" className="display">
        {currentDisplay}
      </div>
      <div class="divider-2">
        <span></span>{" "}
      </div>
      <Special id="AC" skills={reset} />
      <Special id="Nan" />
      <Special id="Nan" />
      <Math id="÷" function={mathematicsOperations} />
      <Numbers id="7" numbers={handleNumbers} />
      <Numbers id="8" numbers={handleNumbers} />
      <Numbers id="9" numbers={handleNumbers} />
      <Math id="×" function={mathematicsOperations} />
      <Numbers id="4" numbers={handleNumbers} />
      <Numbers id="5" numbers={handleNumbers} />
      <Numbers id="6" numbers={handleNumbers} />
      <Math id="—" function={mathematicsOperations} />
      <Numbers id="1" numbers={handleNumbers} />
      <Numbers id="2" numbers={handleNumbers} />
      <Numbers id="3" numbers={handleNumbers} />
      <Math id="+" function={mathematicsOperations} />
      <Numbers id="." numbers={inputDot} />
      <Numbers id="0" numbers={handleNumbers} />
      <Special id="Nan" />
      <Math id="=" />
    </div>
  );
}

export default App;
