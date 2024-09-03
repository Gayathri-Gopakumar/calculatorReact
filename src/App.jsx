
import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';

function App() {
  const [screenValue, setScreenValue] = useState('0');

  function displayContent(value) {
    setScreenValue(prevValue => (prevValue === '0' ? value : prevValue + value));
  }

  function clearScreen() {
    setScreenValue('0');
  }

  function deleteLast() {
    setScreenValue(prevValue => (prevValue.length > 1 ? prevValue.slice(0, -1) : '0'));
  }

  function calculateResult() {
    try {
      setScreenValue(eval(screenValue).toString());
    } catch {
      setScreenValue('Error');
    }
  }

  return (
    <div style={{backgroundImage: 'linear-gradient(red, yellow)',height:'100vh'}} className="button-container d-flex flex-row justify-content-center align-items-center flex-wrap mt-5">
      <div className="calculator ">
        <Form.Label htmlFor="screen"></Form.Label>
        <Form.Control
          className="form-control text-center my-4"
          type="text"
          id="screen"
          value={screenValue}
          readOnly
        />
        <div className="button-container d-flex flex-wrap justify-content-center align-items-center ">
          <button onClick={() => displayContent('7')} className="btn btn-light calc-btn">7</button>
          <button onClick={() => displayContent('8')} className="btn btn-light calc-btn">8</button>
          <button onClick={() => displayContent('9')} className="btn btn-light calc-btn">9</button>
          <button onClick={() => displayContent('*')} className="btn btn-light calc-btn">*</button>

          <button onClick={() => displayContent('4')} className="btn btn-light calc-btn">4</button>
          <button onClick={() => displayContent('5')} className="btn btn-light calc-btn">5</button>
          <button onClick={() => displayContent('6')} className="btn btn-light calc-btn">6</button>
          <button onClick={() => displayContent('-')} className="btn btn-light calc-btn">-</button>

          <button onClick={() => displayContent('1')} className="btn btn-light calc-btn">1</button>
          <button onClick={() => displayContent('2')} className="btn btn-light calc-btn">2</button>
          <button onClick={() => displayContent('3')} className="btn btn-light calc-btn">3</button>
          <button onClick={() => displayContent('+')} className="btn btn-light calc-btn">+</button>

          <button onClick={clearScreen} className="btn btn-light calc-btn">AC</button>
          <button onClick={() => displayContent('0')} className="btn btn-light calc-btn">0</button>
          <button onClick={() => displayContent('/')} className="btn btn-light calc-btn">/</button>
          <button onClick={calculateResult} className="btn btn-light calc-btn">=</button>

          <button onClick={deleteLast} className="btn btn-light calc-btn">DEL</button>
        </div>
      </div>
    </div>
  );
}

export default App;

