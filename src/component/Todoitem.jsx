import React from "react";
import './todo.css';

export const Todoitem = (props) => {
  const [iscomplate, setIscomplate] = React.useState(props.item.iscomplate);

  let Red = {
    color: "red",
  };
  let Green = {
    color: "green",
  };

  return (
    <div className='mainlistdiv' style={!iscomplate ? Red : Green}>
    <div className='listitems'>
    <div  >{props.item.value}</div>
    
        <input
          type="checkbox"
          checked={props.item.iscomplate}
          onChange={(e) => {
            setIscomplate(e.target.checked);
            console.log(props.item.id);
            props.markascomplate(props.item.id, e.target.checked);
          }}
        />
      </div>
    </div>
  );
};
