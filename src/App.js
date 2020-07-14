/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const SVG = (props) => (
  <svg width={props.width} height={props.height}
  stroke={props.stroke} fill={props.fill}
  viewBox="0 0 150 150" 
  xmlns="http://www.w3.org/2000/svg">
    <path d="M 0, 75
      C 0, 18.75 18.75, 0 75, 0
      S 150, 18.75 150, 75
      131.25, 150 75, 150
      0, 131.25 0, 75">
      </path>
  </svg>
)
const Numbers = (props) => (
  <div class="button-center">
    <svg width="50px" height="50px"
    viewBox="0 0 150 150" 
    stroke="#b2bec3" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0, 75
          C 0, 18.75 18.75, 0 75, 0
          S 150, 18.75 150, 75
          131.25, 150 75, 150
          0, 131.25 0, 75
          " fill="#FAFAFA"></path>
    </svg>
    <a>{props.id}</a>
  </div>
)

const Special = (props) => (
  <div className={`button-special ${props.id === "Nan" && 'nan'}`}>
    <svg width="50px" height="50px" 
    viewBox="0 0 150 150" 
    stroke="#fab1a0" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0, 75
        C 0, 18.75 18.75, 0 75, 0
        S 150, 18.75 150, 75
        131.25, 150 75, 150
        0, 131.25 0, 75
        " fill="#d63031"></path>
    </svg>
    <a>{props.id}</a>
  </div>
)

const Math = (props) => (
  <div class="button-math">
    <SVG width="50px" height="50px" 
    stroke="#c8d6e5" fill="#FAFAFA" />
    <a>{props.id}</a>
  </div>
)

function App() {
  return (
    <div className="calculator">
      <div id="equation" className="equation">
        8 x 8 + 9
      </div>
      <div id="display" className="display">
        72
      </div>
		<div class="divider-2"><span></span> </div>
      <Special id="AC" />
      <Special id="Nan" />
      <Special id="Nan" />
      <Math id="/" />
      <Numbers id="7" />
      <Numbers id="8" />
      <Numbers id="9" />
      <Math id="*" />
      <Numbers id="4" />
      <Numbers id="5" />
      <Numbers id="6" />
      <Math id="-" />
      <Numbers id="1" />
      <Numbers id="2" />
      <Numbers id="3" />
      <Math id="+" />
      <Numbers id="." />
      <Numbers id="0" />
      <Special id="Nan" />
      <Math id="=" />
    </div>






    
   
  );
}

export default App;
