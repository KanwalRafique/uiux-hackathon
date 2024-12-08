import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Editors from './Components/Editors'
import Footer from './Components/Footer'
import BestSellers from './Components/Bestsellers'
import Vita from './Components/Vita'
import Universe from './Components/Universe'
import Featured from './Components/Featured'



function Homepage() {
  return(
    <div>

    <Navbar />
    <Hero />
    <Editors />
    <BestSellers />
    <Vita />
    <Universe />
    <Featured />
    <Footer />


    
    </div>
    
  )
}
export default Homepage 