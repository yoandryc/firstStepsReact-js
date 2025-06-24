// este es un estilo global todo el proyecto
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Pizza from './components/Pizza'
function App() {
  return (
    <div className='container
    '>
    <Header/>
    {/* <Card img="/crab.png" /> */}
    <Pizza/>
    </div>
    
  )
}

export default App
