import React from 'react'
import Navbar from './componnet/navbar/navbar'
import Banner from './componnet/banner/banner'
import HeroSection from './componnet/hero section/hero-section'

function App() {
  return (
    <main className=" bg-cyan-700 min-h-screen" >
        <Banner></Banner>
        <Navbar ></Navbar>
        <HeroSection></HeroSection>
    </main>
  )
}

export default App