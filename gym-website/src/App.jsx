import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
