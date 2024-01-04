import React from "react";
// import { IconName } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
import { TbSquareRoundedXFilled } from "react-icons/tb";
const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
      <TbSquareRoundedXFilled className="mr-[20px] icons" size={40} onClick={()=>{
        props.onSelect(props.inde)
      }}/>
        <li key={props.index}>{props.text}</li>
      </div>
    </>
  );
};

export default Todolist;
