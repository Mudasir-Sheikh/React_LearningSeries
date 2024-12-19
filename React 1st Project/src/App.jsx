import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useState = Used to Alter or Update the UI when The Logic is updated as shown in counter example
// we are updating the counter in Logic but it is not updated in UI
// It return 2 things; variable and a function to updateVariable
// let [Var , SetVar] = UseState(0)  => 0 represents intial value of Var
//It updates the var on Everywhere in the page


function App() {
  let [counter , SetCounter] = useState(15);

 
  let AddValue = () => {
    SetCounter(counter + 1)
    console.log(counter)
  }


  let RemoveValue=() => {
    if (counter>0){
     SetCounter(counter-1)}
    else{
      SetCounter(counter)
    }

  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={AddValue}>Add value</button>
      <button onClick={RemoveValue}>Decrease value</button>

      <p>Footer:{counter}</p>


    </>
  )
}

export default App
