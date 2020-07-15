/* eslint-disable no-eval */
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
    <div
      className="button-center"
      id={Converter(props.id)}
      onClick={props.numbers}
    >
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

function MathButton(props) {
  return (
    <div
      className={props.id === "=" ? "button-math-equals" : "button-math"}
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
  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [formula, setFormula] = useState(String.fromCharCode(160));

  function reset() {
    setCurrentDisplay("0");
    setFormula(String.fromCharCode(160));
  }

  function handleNumbers(e) {
    let needReset = false;
    if (formula.substr(formula.length - 1) === "=") {
      needReset = true;
      reset();
    }
    const value = e.target.innerText || e.target.id;
    switch (currentDisplay) {
      case "0":
        setCurrentDisplay(value);
        break;
      case "/":
        setFormula(formula + currentDisplay);
        setCurrentDisplay(value);
        break;
      case "x":
        setFormula(formula + "*");
        setCurrentDisplay(value);
        break;
      case "—":
        setFormula(formula + "-");
        setCurrentDisplay(value);
        break;
      case "+":
        setFormula(formula + currentDisplay);
        setCurrentDisplay(value);
        break;
      default:
        setCurrentDisplay(needReset ? value : currentDisplay + value);
    }
    if (currentDisplay.length > 9) {
      maxLimitError();
    }
  }

  function mathematicsOperations(e) {
    // let needReset = false;
    // if (formula.substr(formula.length-1)==='=') {
    //   needReset = true;
    //   reset();
    // }
    console.log('formula len:', formula.length);
    let putZero = currentDisplay==='-' && true;
    let isNegative = (currentDisplay.substr(0, 1) === "-") && true;
    if (!/LIMIT ERROR/.test(currentDisplay)) {
      formula === String.fromCharCode(160) && setFormula(""); // remove the empty char.
      const value = e.target.innerText ? e.target.innerText : e.target.id;
      switch (value) {
        case "÷":
          !/\+|x|\/|—/.test(currentDisplay) &&
            setFormula(
              `${formula}${isNegative ? "(" : ""}${currentDisplay}${
                isNegative ? ")" : ""
              }`
            );
          setCurrentDisplay("/");
          break;
        case "×":
          !/\+|x|\/|—/.test(currentDisplay) &&
            setFormula(
              `${formula}${isNegative ? "(" : ""}${currentDisplay}${
                isNegative ? ")" : ""
              }`
            );
          setCurrentDisplay("x");
          break;
        case "+":
          !/\+|x|\/|—/.test(currentDisplay) &&
            setFormula(
              `${formula}${isNegative ? "(" : ""}${currentDisplay}${
                isNegative ? ")" : ""
              }`
            );
          setCurrentDisplay("+");
          break;
        case "—":
          if (/\+|x|\/|—/.test(currentDisplay)) {
            console.log('negative mode');
            // negative value
            if (currentDisplay==='x') {
              setFormula(formula + '*');
            } else if (currentDisplay==='—') {
              setFormula(formula + '-');
            } else {
              setFormula(formula + currentDisplay);
            }
            setCurrentDisplay("-");
          } else if (isNegative) { // remove negativity
            if (currentDisplay==='-') {
              setCurrentDisplay('0');
            } else {
              setCurrentDisplay(currentDisplay.substr(1, currentDisplay.length));
            };

            
          } else {
            setFormula(formula + currentDisplay);
            setCurrentDisplay("—");
          }
          break;
        default:
      }
    }
    console.log('formula len:', formula.length);
  }

  function maxLimitError() {
    setCurrentDisplay("LIMIT ERROR");
  }

  function inputDot() {
    if (formula.substr(formula.length - 1) === "=") {
      reset();
    } else if (!/\.|LIMIT ERROR/.test(currentDisplay)) {
      setCurrentDisplay(currentDisplay + ".");
    }
  }

  function evaluate() {
    console.log('formula:', formula, formula.length);
    console.log('formula:', formula.trim(), formula.length); // len here is 3 only 2 lanf dapat
    console.log('currentdisplau:', currentDisplay);
    
    if (formula.substr(formula.length - 1) === "=") {
    } else if (!/\+|x|\/|—|-|LIMIT ERROR/.test(currentDisplay)) {
      let isNegative = currentDisplay.substr(0, 1) === "-" && true;
      let equation = `${formula}${isNegative ? "(" : ""}${currentDisplay}${
        isNegative ? ")" : ""
      }`
      let answer = eval(equation);
      console.log('equation:', equation);
      console.log('answer:', answer);
      setCurrentDisplay(answer);
      setFormula(equation + "=");
    } else if (!/LIMIT ERROR/.test(currentDisplay)) {
      setCurrentDisplay(eval(formula));// error here 9- * =
      setFormula(formula + "=");
    }
  }
  return (
    <div className="calculator">
      <div id="equation" className="equation">
        {formula}
      </div>
      <div id="display" className="display">
        {currentDisplay}
      </div>
      <div className="divider-2">
        <span></span>{" "}
      </div>
      <Special id="AC" skills={reset} />
      <Special id="Nan" />
      <Special id="Nan" />
      <MathButton id="÷" function={mathematicsOperations} />
      <Numbers id="7" numbers={handleNumbers} />
      <Numbers id="8" numbers={handleNumbers} />
      <Numbers id="9" numbers={handleNumbers} />
      <MathButton id="×" function={mathematicsOperations} />
      <Numbers id="4" numbers={handleNumbers} />
      <Numbers id="5" numbers={handleNumbers} />
      <Numbers id="6" numbers={handleNumbers} />
      <MathButton id="—" function={mathematicsOperations} />
      <Numbers id="1" numbers={handleNumbers} />
      <Numbers id="2" numbers={handleNumbers} />
      <Numbers id="3" numbers={handleNumbers} />
      <MathButton id="+" function={mathematicsOperations} />
      <Numbers id="." numbers={inputDot} />
      <Numbers id="0" numbers={handleNumbers} />
      <Special id="Nan" />
      <MathButton id="=" function={evaluate} />
    </div>
  );
}

export default App;
