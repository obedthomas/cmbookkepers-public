import React from 'react'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Layouts
import Hero from './layout/Hero'
import About from './layout/About'
import Services from './layout/Services'
import Clients from './layout/Clients'

// CSS
import './App.css'

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
        <Hero />
      </header>
      <About />
      <Services />
      <Clients />
      <Footer />
    </React.Fragment>
  )
}

export default App
