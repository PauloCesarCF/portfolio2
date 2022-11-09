import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './components/Pages/Home'
import Projects from './components/Pages/Projects'
import Sobre from './components/Pages/Sobre'
import Footer from './components/Layout/Footer'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projetos" element={<Projects/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
