import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const Numbers = (props) => (
          <div class="button-center">
      <svg width="50px" height="50px" 
      viewBox="0 0 150 150" 
      stroke="#ffeaa7" xmlns="http://www.w3.org/2000/svg">
    
        <path d="M 0, 75
                C 0, 18.75 18.75, 0 75, 0
                S 150, 18.75 150, 75
                    131.25, 150 75, 150
                    0, 131.25 0, 75
            " fill="#FADB5F"></path>
      </svg>
    <a>{props.id}</a></div>
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
      <Numbers id="1" />
      <Numbers id="2" />
      <Numbers id="3" />
      <Numbers id="4" />
      <Numbers id="1" />
      <Numbers id="2" />
      <Numbers id="3" />
      <Numbers id="4" />
      <Numbers id="1" />
      <Numbers id="2" />
      <Numbers id="3" />
      <Numbers id="4" />
      <Numbers id="1" />
      <Numbers id="2" />
      <Numbers id="3" />
      <Numbers id="4" />

    </div>






    
   
  );
}

export default App;
