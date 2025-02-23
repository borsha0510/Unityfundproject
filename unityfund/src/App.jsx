
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='OUR PROGRAMS' title='Choose sector to donate'/>
      <Programs/>
    <About/>
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    </div>
    </div>
  )
}

export default App