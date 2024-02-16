import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import StatutoryHero from '../components/Statutory/StatutoryHero'
import StatutoryIntro from '../components/Statutory/StatutoryIntro'
import StatutoryFooter from '../components/Statutory/StatutoryFooter'
import Footer from '../components/Footer'
import StatutoryServices from '../components/Statutory/StatutoryServices'

function StatutoryCompliance() {
  return (
    <div>
        <NavBar/>
        <StatutoryHero/>
        <StatutoryIntro/>
        <StatutoryServices/>
        <StatutoryFooter/>
        <Footer/>

    </div>
  )
}

export default StatutoryCompliance