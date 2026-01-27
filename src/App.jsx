import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NewArrivals from './pages/NewArrivals'
import Collections from './pages/Collections'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-arrivals' element={<NewArrivals />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App