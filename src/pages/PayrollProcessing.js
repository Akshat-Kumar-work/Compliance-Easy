import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import PayrollHero from '../components/Payroll/PayrollHero'
import WhyPayroll from '../components/Payroll/WhyPayroll'
import Footer from '../components/Footer'
import PayrollFooter from '../components/Payroll/PayrollFooter'

function PayrollProcessing() {
  return (
    < >
        <NavBar/>
        <PayrollHero/>
        <WhyPayroll/>
        {/* <PayrollFooter/> */}
        <Footer/>

    </>
  )
}

export default PayrollProcessing
