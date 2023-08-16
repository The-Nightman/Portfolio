import { TriCol } from './components'
import { Home, About } from './pages'
import { Routes, Route } from 'react-router-dom';
import "./components/component.css"

function App() {

  return (
    <div>
      <TriCol/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
