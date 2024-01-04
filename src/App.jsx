import React, { useState } from "react";
import "./App.css";
import './index.css'
import Todolist from "./components/Todolist";
// import { IoMdAddCircle } from "react-icons/io";
const App=()=>{
const [inputlist,setinputlist]=useState("")
const [items,setItems]=useState([]);
const itemEvent=(e)=>{
    setinputlist(e.target.value);
}
const listofitems=()=>{

    setItems([...items,inputlist]);
    setinputlist("")

}
const deleteitems=(index)=>{
    setItems(items.filter((item,i)=>{
        return i!==index
    }))
}
  return (
    <>
      <div className="main_div">
        <div className="center_div ">
        <br/>
          <h1 className="h1hu">To Do List</h1>
          <br/>
            <input type="text" value={inputlist} placeholder="Add Items" onChange={itemEvent} className="inputhu"/>
            <button onClick={listofitems} className="Plus_button"> + </button>
            <ol className="olhu">
              {items.map((val,index)=>{
               return <Todolist text={val} id={index} inde={index} onSelect={deleteitems}/>
              })}
        </ol>
        </div>
      </div>
    </>
  );
  }

export default App;
