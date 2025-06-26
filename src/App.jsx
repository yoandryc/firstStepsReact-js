// este es un estilo global todo el proyecto
//import Card from './components/Card'
//import Pizza from './components/Pizza'
import './App.css'
import Home from './pages/Home'
import Owner from './pages/Owner'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/"element={<Home />}/>
      <Route path="/Owner" element={<Owner />}/>
    </Routes>
   </>   
  )
}

export default App
