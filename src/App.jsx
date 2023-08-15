import { TriCol, Navbar} from './components'
import { Home, About } from './pages'
import { Routes, Route } from 'react-router-dom';
import "./components/component.css"

function App() {

  return (
    <div>
      <TriCol/>
      <Navbar/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <p>Rev1.5 Built in 2023<br/>© 2023 Keenan Brant</p>
      </footer>
    </div>
  )
}

export default App
