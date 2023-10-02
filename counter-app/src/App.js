import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
 

  return (
    <div className=" bg-slate-200 border-solid border-black border-4 rounded-lg flex flex-col m-auto mt-40 p-10 space-y-8 w-[50rem] h-[20rem]">
    <div className="space-y-3 p-6 flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold">Counter</h1>
    <h1 className="text-xl font-bold">Counter:<span id="demo">{counter}</span></h1>
    </div>
    <div className="btns flex items-center justify-center space-x-3">
      <button onClick={() =>{setCounter(counter+1)}} className=" border-solid border-2 p-2 rounded-md border-black bg-neutral-200 hover:bg-black hover:text-white text-lg font-semibold">Increase Counter</button>
      <button onClick={() =>{counter===0?alert("Can't go down to zero"):setCounter(counter-1)}} className="decresebtn border-solid border-2 p-2 rounded-md border-black bg-neutral-200 hover:bg-black hover:text-white text-lg font-semibold">Decrease Counter</button>
      <button onClick={() =>{setCounter(0)}} className="resetbtn border-solid border-2 p-2 rounded-md border-black bg-neutral-200 hover:bg-black hover:text-white text-lg font-semibold">Reset Counter</button>
    </div>
    </div>
  );
}

export default App;
