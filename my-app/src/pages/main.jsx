import React from "react";
import { useReducer } from "react";
export default function Main() {
  function reducer(state, action) {
    if (action.type === "addition") {
      return {
        ...state,
        result: Number(state.firstNumber) + Number(state.secondNumber),
      };
    }
    if (action.type === "subtraction") {
      return {
        ...state,
        result: Number(state.firstNumber) - Number(state.secondNumber),
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    firstNumber: 0,
    secondNumber: 0,
    result: 0,
  });

  ///
  const firstHandler = (event) => {
    state.firstNumber = event.target.value;
  };

  /////

  const secondHandler = (event) => {
    state.secondNumber = event.target.value;
  };

  //////////////
  return (
    <>
      <label htmlFor=""> firstNumber</label>
      <input type="number" onChange={firstHandler} />
      <label htmlFor=""> second Number</label>
      <input type="number" onChange={secondHandler} />

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
      <div>{state.result}</div>
    </>
  );
}
