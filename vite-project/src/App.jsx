import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About  from './components/About/About'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

function App() {
  

  return (
    <div className='App'>
       <Navbar/>
       <Hero/>
       <About/>
       <Services/>
       <Skills/>
       <Contact/>
    </div>
  )
}

export default App
