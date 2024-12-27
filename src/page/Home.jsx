import React from 'react'
import AddElement from '../components/AddElement'
import Navber from '../components/ui/Navber'
import Footer from '../components/ui/Footer'
import Header from '../components/Header'
import Blog from '../components/ui/Blog'

function Home() {
  return (
    <>
      <Navber/>
      <Header/>
      <AddElement />
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home