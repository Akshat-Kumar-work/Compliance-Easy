import React from 'react'

function StatutoryHero() {
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

                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src="../Payroll-Processing2.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  )
}

export default StatutoryHero