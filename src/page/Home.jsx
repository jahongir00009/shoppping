import AddElement from '../components/AddElement'
import Navber from '../components/ui/Navber'
import Footer from '../components/ui/Footer'
import Header from '../components/Header'
import MiniHeader from '../components/common/miniHeader'

function Home() {
  return (
    <>
      <Navber />
      <MiniHeader title={"Product Comparison"} LinkLocation={location.toString()} />
      <Header />
      <AddElement />
      <Footer />
    </>
  )
}

export default Home