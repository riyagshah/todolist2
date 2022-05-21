import React from "react";
import './todo.css'

export const Todo = (props) => {
  const [value, setvalue] = React.useState("");
  

  return (
    <div className='input_but'>
      <input 
        type="text"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        value={value}
      />
      <button
        onClick={() => {
          props.todoin(value);
          setvalue("");
        }}
      >
        +
      </button>
    </div>
  );
};