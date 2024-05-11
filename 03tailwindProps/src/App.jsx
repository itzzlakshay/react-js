import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-black bg-green-400 rounded-xl mb-4'>tailwind test</h1>
      <Card username="chai" btnText="view " />
      <Card username="lakshay"  />
      

    </>
  )
}

export default App
