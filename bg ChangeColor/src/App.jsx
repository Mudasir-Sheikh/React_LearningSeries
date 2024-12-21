import { useState } from 'react'

import './App.css'
import Button from './components/Button'



function App() {
  const [Color, setColor] = useState("black")
  
  function Click(Color){
    setColor(Color)
  }

  return (
    <>
    <div
        className="w-full h-screen flex justify-center items-center duration-200"
        style={{ backgroundColor: Color }}
    >
        <div className="p-4 gap-3 flex flex-wrap justify-center items-center border border-gray-800 rounded">
            <Button Colorname="bg-red-300" BtnText="Pink" />
            <Button Colorname="bg-red-800" BtnText="Red" />
            <Button Colorname="bg-orange-400" BtnText="Light Orange" />
            <Button Colorname="bg-orange-800" BtnText="Orange" />
            <Button Colorname="bg-amber-400" BtnText="Yellow" />
            <Button Colorname="bg-lime-500" BtnText="Lime" />
            <Button Colorname="bg-green-500" BtnText="Green" />
            <Button Colorname="bg-cyan-400" BtnText="Cyan" />
            <Button Colorname="bg-violet-900" BtnText="Violet" />
            <Button Colorname="bg-purple-900" BtnText="Purple" />
        </div>
    </div>
</>
  )
}

export default App
