import React from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../components/Navbar/NavBar';

const PayrollHero = () => {
    return (
        <>
            <div className="Payrollhero" id='Payrollhero'>
                <div>
                    {/* <NavBar /> */}
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                Payroll Compliance service                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">Our Payroll Compliance Services aim to ensure that payroll operations fully comply with all relevant regulations, addressing any potential gaps in compliance related to employee wage entitlements.</div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src="../Payroll-Processing2.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayrollHero;