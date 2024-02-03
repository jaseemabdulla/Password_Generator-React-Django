import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      
     <h1 className='text-3xl md:text-6xl text-center lg:mx-36'>Instantly generate a secure, random password with the <span className='bg-black text-yellow-500'>RAND</span> online tool</h1>
    </div>
    </>
  )
}

export default App
