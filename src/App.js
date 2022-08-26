import React from 'react'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
