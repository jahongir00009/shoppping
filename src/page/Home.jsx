import React from 'react'
import AddElement from '../components/AddElement'
import Navber from '../components/ui/Navber'
import Footer from '../components/ui/Footer'
import Header from '../components/Header'
import Jasur from '../components/Jasur'
import InpitCard from '../components/InpitCard'
import Product from '../components/Produck'

function Home() {
  return (
    <>
      <Navber/>
      <Header/>
      <Jasur/>
      <AddElement />
      <Product/>
      <InpitCard/>
      
      <Footer/>
    </>
  )
}

export default Home