import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import OperationHero from '../components/Operational/OperationHero'
import OperationIntro from '../components/Operational/OperationIntro'
import OpertionServices from '../components/Operational/OpertionServices'
import OperationFooter from '../components/Operational/OperationFooter'
import Footer from '../components/Footer'

function OperationalCompliance() {
  return (
  <>
    <NavBar/>
    <OperationHero/>
    <OperationIntro/>
    <OpertionServices/>
    <OperationFooter/>
    <Footer/>
  </>
    
  )
}

export default OperationalCompliance