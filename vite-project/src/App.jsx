import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About  from './components/About/About'

function App() {
  

  return (
    <div className='App'>
       <Navbar/>
       <Hero/>
       <About/>
    </div>
  )
}

export default App
