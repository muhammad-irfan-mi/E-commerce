import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Top } from './assets/Header/Top'
import { Header } from './assets/Header/Header'
import { Home } from './assets/Home/Home'
import { ToyP } from './assets/ToysComponent/ToyP'
import { ToyW } from './assets/ToysComponent/ToyW'
import { Footer } from './assets/Footer/Footer'
import { Soffer } from './assets/Special offer/Soffer'
import { Cetagory } from './assets/category/Cetagory'
import Login from './assets/Login'
import Contact from './assets/contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        {/* <Top /> */}
        <Header />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cetagory' Component={Cetagory}></Route>
          <Route path='/plastic' Component={ToyP}></Route>
          <Route path='/wood' Component={ToyW}></Route>
          <Route path='/soffer' Component={Soffer}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/contact' Component={Contact}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
