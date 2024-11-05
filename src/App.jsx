import './App.css'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details/:id' element={<Details />}/>
    </Routes>
    </div>
  )
}

export default App
