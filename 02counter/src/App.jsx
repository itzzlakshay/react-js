import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);


  const addValue = () =>{
    console.log("cliced", counter);
    setCounter(counter+1)
  }

  const removeValue = () =>{
    setCounter(counter -1)
  }

  
  return (
    <>
     <h1>chai aur react</h1>
     <h3>counter value :{counter} </h3>

     <button 
     onClick={addValue}
     >add value</button>

     <br />

     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
