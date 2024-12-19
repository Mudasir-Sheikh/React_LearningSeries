import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let counter = 10
let AddValue = ()=>{
  counter+=1
  console.log(counter)
}
function App() {


  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={AddValue}>Add value</button>
     
   
    </>
  )
}

export default App
