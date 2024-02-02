import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen'>

     <h1 className='text-8xl'>Instantly generate a secure, random password with the <span className='bg-slate-500'>RAND</span> online tool</h1>
    </div>
    </>
  )
}

export default App
