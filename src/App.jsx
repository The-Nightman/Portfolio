import { useState } from 'react'
import { TriCol, Navbar} from './components'
import { Home, About } from './pages'
import { HashRouter, Route } from 'react-router-dom';
import "./components/component.css"

function App() {

  return (
    <div>
      <TriCol/>
      <Navbar/>
      <HashRouter basename=''>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </HashRouter>
      <footer>
        <p>Rev1.5 Built in 2023<br/>© 2023 Keenan Brant</p>
      </footer>
    </div>
  )
}

export default App
