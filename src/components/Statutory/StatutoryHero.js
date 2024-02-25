import React from 'react'
import { useNavigate } from 'react-router-dom'

function StatutoryHero() {

    const navigate = useNavigate();

    function ContactHandler(){
        navigate("/contact")
    }

  return (
    (
        <>
            <div className="Statutoryhero" id='Statutoryhero'>
                <div>
                    {/* <NavBar /> */}
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                             Statutory Compliance Services
                            </h1>
                            <div className="text-xl  tracking-tight mb-5 text-gray-500">At ComplianceEazy , we recognize that navigating the intricacies of statutory compliance is a critical aspect of running a successful and ethical business. Our statutory compliance services are designed to provide comprehensive solutions, ensuring that your organization meets all legal obligations. Explore how our expertise can support your compliance needs:</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                               
                                <a onClick={ContactHandler} className="inline-flex font-semibold items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-gray-500 hover:bg-violet-500 shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </a>
                            </div>  
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src="../statutorycompliance.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  )
}

export default StatutoryHero