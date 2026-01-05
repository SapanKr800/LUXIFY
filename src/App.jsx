import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FeaturedProducts from './components/FeaturedProducts'
import Newsletter from './components/Newsletter'
import Categories from './components/Categories'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App