import React from "react";
import { useReducer } from "react";
export default function Main() {
  function reducer(state, action) {
    // ...
  }

  const [state, dispatch] = useReducer(reducer, {
    firstNumber: 0,
    secondNumber: 0,
  });

  ///
  const firstHandler = (event) => {
    state.firstNumber = event.target.value;
    console.log(event.target.value);
  };

  /////

  const secondHandler = (event) => {
    state.secondNumber = event.target.value;
  };

  //////////////
  return (
    <>
      <form action="">
        <label htmlFor=""> firstNumber</label>
        <input type="number" onChange={firstHandler} />
        <label htmlFor=""> second Number</label>
        <input type="number" onChange={secondHandler} />
      </form>
      <button
        onClick={() => {
          dispatch({ type: "addition" });
        }}
      >
        addition
      </button>
      <button
        onClick={() => {
          dispatch({ type: "subtraction" });
        }}
      >
        subtraction
      </button>
    </>
  );
}
