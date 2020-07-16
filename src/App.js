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

  function resetAll(
    e,
    displayScreen = "0",
    formulaDisplay = String.fromCharCode(160)
  ) {
    e.preventDefault();
    setCurrentDisplay(displayScreen);
    setFormula(formulaDisplay);
  }

  

  function mathematicsOperations(e) {
    e.preventDefault();
    let needReset = formula.substr(formula.length - 1) === "=" && true;
    let isNegative;
    try {
      isNegative = currentDisplay.substr(0, 1) === "-" && true;
    } catch (err) {
      isNegative = false;
    }
    if (!/LIMIT ERROR/.test(currentDisplay)) {
      formula === String.fromCharCode(160) && setFormula(""); // remove the empty char.
      const value = e.target.innerText ? e.target.innerText : e.target.id;
      switch (value) {
        case "÷":
          if (needReset) {
            resetAll(e, "/", currentDisplay);
            return;
          }
          !/\+|x|\/|—/.test(currentDisplay) &&
            setFormula(
              isNegative && currentDisplay.length === 1
                ? formula + "0"
                : `${formula}${isNegative ? "(" : ""}${currentDisplay}${
                    isNegative ? ")" : ""
                  }`
            );
          setCurrentDisplay("/");
          break;
        case "×":
          if (needReset) {
            resetAll(e, "x", currentDisplay);
            return;
          }
          !/\+|x|\/|—/.test(currentDisplay) &&
            setFormula(
              isNegative && currentDisplay.length === 1
                ? formula + "0"
                : `${formula}${isNegative ? "(" : ""}${currentDisplay}${
                    isNegative ? ")" : ""
                  }`
            );
          setCurrentDisplay("x");
          break;
        case "+":
          if (needReset) {
            resetAll(e, "+", currentDisplay);
            return;
          }
          if (!/\+|x|\/|—/.test(currentDisplay)) {
            if (
              /\+|\*|\/|-/.test(formula.substr(formula.length - 1)) &&
              /\+|x|\/|\-/.test(currentDisplay)
            ) {
              setFormula(formula.substr(0, formula.length - 1));
            } else if (isNegative && currentDisplay.length === 1) {
              if (isNegative) {
                if (currentDisplay === "-") {
                  setCurrentDisplay("0");
                }
              } // remove negative
            } else {
              setFormula(
                `${formula}${isNegative ? "(" : ""}${currentDisplay}${
                  isNegative ? ")" : ""
                }`
              );
            }
          }
          setCurrentDisplay("+");
          break;
        case "—":
          if (needReset) {
            resetAll(e, "—", currentDisplay);
            return;
          }
          if (/\+|x|\/|—/.test(currentDisplay)) {
            if (/\+|\*|\/|-/.test(formula.substr(formula.length - 1))) {
              setFormula(formula.substr(0, formula.length - 1));
            } else if (currentDisplay === "x") {
              setFormula(formula + "*");
            } else if (currentDisplay === "—") {
              setFormula(formula + "-");
            } else {
              setFormula(formula + currentDisplay);
            }
            setCurrentDisplay("-");
          } else if (isNegative) {
            // remove negativity
            if (currentDisplay === "-") {
              setCurrentDisplay("0");
            } else {
              setCurrentDisplay(
                currentDisplay.substr(1, currentDisplay.length)
              );
            }
          } else {
            setFormula(formula + currentDisplay);
            setCurrentDisplay("—");
          }
          break;
        default:
      }
    }
  }

  function maxLimitError() {
    setCurrentDisplay("LIMIT ERROR");
  }

  function inputDot(e) {
    e.preventDefault();
    if (formula.substr(formula.length - 1) === "=") {
      resetAll(e);
    } else if (!/\.|LIMIT ERROR/.test(currentDisplay)) {
      setCurrentDisplay(currentDisplay + ".");
    }
  }

  function evaluate(e) {
    e.preventDefault();

    if (formula.substr(formula.length - 1) === "=") {
    } else if (!/\+|x|\/|—|LIMIT ERROR/.test(currentDisplay)) {
      let isNegative = currentDisplay.substr(0, 1) === "-" && true;
      let equation =
        isNegative && currentDisplay.length === 1
          ? formula + "0"
          : `${formula}${isNegative ? "(" : ""}${currentDisplay}${
              isNegative ? ")" : ""
            }`;
      console.log("equation:", equation);
      let answer = eval(equation);
      setCurrentDisplay("" + answer);
      setFormula(equation + "=");
    } else if (!/LIMIT ERROR/.test(currentDisplay)) {
      console.log("equation:", formula);
      setCurrentDisplay("" + eval(formula));
      setFormula(formula + "=");
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    function handleKeyPress(e) {
      console.log(e.key);
      switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          let el = document.getElementById("one");
          el.classList.toggle("button-center-active");
          handleNumbers("", e.key);
          setTimeout(() => el.classList.toggle("button-center-active"), 280);
          break;
        case "÷":
          return "divide";
        case "×":
          return "multiply";
        case "—":
          return "subtract";
        case "+":
          return "add";
        case "=":
          return "equals";
        case ".":
          return "decimal";
        case "AC":
          return "clear";
        default:
          return "Nan";
      }
    }
    function handleNumbers(e, def = undefined) {
      console.log(currentDisplay);
      // e.preventDefault();
      let needReset = false;
      if (formula.substr(formula.length - 1) === "=") {
        needReset = true;
        resetAll(e);
      }
      const value = def || e.target.innerText || e.target.id;
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
    // returned function will be called on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentDisplay, handleNumbers]);

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
      <Special id="AC" skills={resetAll} />
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
