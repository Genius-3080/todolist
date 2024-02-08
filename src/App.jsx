import { useState } from 'react';
import './App.css';
let arr = []
function App() {
const [val, setVal] = useState('')
const [render, setRener] = useState(true)
  function fnAdd(){
    arr.push(val)
   setRener(!render)
  }
  return (
    <div className="App">
      <h1>To-do list</h1>
    <input type="text" onChange={(e)=> setVal(e.target.value)}/>
    <button onClick={fnAdd}>add</button>
 
 {
      arr.map((item, index)=>{
        return <div className="box"> <p className='pure' key={index}>{item}</p> </div>
      })
    }
 </div>
    
  );
}

export default App;
