// este es un estilo global todo el proyecto
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Pizza from './components/Pizza'
import Menu from './components/Menu'
function App() {
  return (
    <div className='container
    '>
    <Header/>
    
    {/* <Card img="/crab.png" /> */}
    <Menu/>
    </div>
    
  )
}

export default App
