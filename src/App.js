import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count,setCounter] = useState(0);
  useEffect(()=>{
    //the code that we ant to run
    console.log('the count is:' , count)
    //optional return function
    return()=>{
      console.log("sdjhgsdv");
    };
  },[count])//the dependency array
  return (
    <div className="App">
      <div className='tutorial'>
<h1>count : {count}</h1>
        <button onClick={()=>setCounter(count-1)}>-</button>
        <button onClick={()=>setCounter(count+1)}>+</button>
     
      </div>
    </div>
  );
}

export default App;
