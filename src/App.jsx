import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
