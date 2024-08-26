import React, { useState, useEffect } from 'react';
import "./App.css";

function Calculadora() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
        if (input && !/[\+\-\*/]$/.test(input)) {
      try {
        setResultado(eval(input).toString());
      } catch {
        setResultado('Error');
      }
    }
  }, [input]);

  const mostrarnumero = (value) => {
    setInput(input + value);
  };

  const limpiar = () => {
    setInput('');
    setResultado('');
  };

  const verresultado = () => {
    setInput(resultado);
  };

  return (
      <div className="calculadora">
      <h1>Calculadora </h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="resultado">{resultado}</div>
      </div>
      <div className="container">
      <div className="teclado">
        <button onClick={() => mostrarnumero('1')}>1</button>
        <button onClick={() => mostrarnumero('2')}>2</button>
        <button onClick={() => mostrarnumero('3')}>3</button>
        <button onClick={() => mostrarnumero('4')}>4</button>
        <button onClick={() => mostrarnumero('5')}>5</button>
        <button onClick={() => mostrarnumero('6')}>6</button>
        <button onClick={() => mostrarnumero('7')}>7</button>
        <button onClick={() => mostrarnumero('8')}>8</button>
        <button onClick={() => mostrarnumero('9')}>9</button>
        <button onClick={() => mostrarnumero('*')}>*</button>
        <button onClick={() => mostrarnumero('/')}>/</button>
        <button onClick={() => mostrarnumero('-')}>-</button>
        <button onClick={() => mostrarnumero('+')}>+</button>
        <button onClick={verresultado}>=</button>
        <button onClick={limpiar}>limpiar</button>
      </div>
      </div>
    </div>
  );
}

export default Calculadora;
