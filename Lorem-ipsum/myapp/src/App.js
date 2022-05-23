import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
import data from "./data"

function App() {

  const [count,setCount] = useState(0);
  const [text,setText] = useState([])

  const handle = (e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    if(count < 0){
      amount = 1;
    }
    if(count > 8){
      amount = 8;
    }
    setText(data.slice(0,amount))
  }

  return (
    <div className="section-center">
      <h3>Lorem-ipsum</h3>
      <form className="lorem-form" onSubmit={handle}> 
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </div>
  );
}

export default App;
