import { useState } from 'react'
import './App.css'
import Card from './components/Card'

// // useState = Used to Alter or Update the UI when The Logic is updated as shown in counter example
// // we are updating the counter in Logic but it is not updated in UI
// // It return 2 things; variable and a function to updateVariable
// // let [Var , SetVar] = UseState(0)  => 0 represents intial value of Var
// //It updates the var on Everywhere in the page


// function App() {
//   let [counter , SetCounter] = useState(15);

 
//   let AddValue = () => {
//     SetCounter(counter + 1)
//     console.log(counter)
//   }


//   let RemoveValue=() => {
//     if (counter>0){
//      SetCounter(counter-1)}
//     else{
//       SetCounter(counter)
//     }

//   }

//   return (
//     <>
//       <h1 className='font-extrabold underline font-blue bg-green-600'>Counter: {counter}</h1>
//       <button onClick={AddValue}>Add value</button>
//       <button onClick={RemoveValue}>Decrease value</button>

//       <p>Footer:{counter}</p>


//     </>
//   )
// }

// export default App




// COMPONENTS AND PROPS IN REACT

// In Order to make Elements and UI code reuseable we make componets and reuse them anywhere needed.Elements
// Components take props=properties as we want differnt texts , img etc in every component so we pass props
// according to requirement 

function App(){
  let CardDiscriptionObj = {
    Card1 : 'This is Card 1 Shoe Discription',
    Card2 : 'This is Card 2 Shoe Discription',
  }
  return(
    <>
    <h1>Componets and Props</h1>

    <Card cardName="Our Yellow Shoe" cardDiscription={CardDiscriptionObj.Card1} BtnText="Buy 1"   />
    <Card cardName="White Shoe" cardDiscription={CardDiscriptionObj.Card2} BtnText="buy 2" />

    {/* we can pass object and array but for this we have to make array/object before and just
     assign array to variable like others we can directly pass array as props.
     pass like this <card descrp={myObj / myArr} /> */}

    </>
  )
}

export default App