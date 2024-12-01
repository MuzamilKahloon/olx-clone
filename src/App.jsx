import React from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Mobile from './components/Mobile'
import Cars from './components/Cars'
import Bikes from './components/Bikes'
import Houses from './components/Houses'
import Videos from './components/Videos'
import Slider from './components/Slider'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Mobile/>
      <Cars/>
      <Bikes/>
      <Houses/>
      <Videos/>
      <Footer/>
    </div>
  )
}

export default App
