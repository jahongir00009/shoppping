import React from 'react'
import AddElement from '../components/AddElement'
import Navber from '../components/ui/Navber'
import Footer from '../components/ui/Footer'
import Header from '../components/Header'
import Jasur from '../components/Jasur'

function Home() {
  return (
    <>
      <Navber/>
      <Header/>
      <Jasur/>
      <AddElement />
      <Footer/>
    </>
  )
}

export default Home