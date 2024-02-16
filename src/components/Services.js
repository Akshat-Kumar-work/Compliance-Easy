import React from 'react';
import { Route } from 'react-router-dom';



const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
                               >
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="./Payroll-Processing.webp" />
                                    <h2 className="font-semibold my-8 text-2xl text-center">Payroll Processing</h2>
                                    {/* <p className="text-md font-medium">
                                    Our expert team handles payroll calculations, tax deductions, and compliance, ensuring accurate and timely payments to your employees
                                    </p> */}
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Labour law consulting.webp" />
                                    <h2 className="font-semibold my-8 text-2xl text-center">Statutory Compliance</h2>
                                    {/* <p className="text-md font-medium">
                                    Our experienced consultants help you understand and navigate complex labour legislation, including employment contracts, workplace policies, employee rights, and dispute resolution..
                                    </p> */}
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="operational_compliance.png" />
                                    <h2 className="font-semibold my-8 text-2xl text-center ">Operational Compliance</h2>
                                    {/* <p className="text-md font-medium">
                                    From eligibility calculations to documentation and fund management, we assist in creating a seamless process for gratuity disbursement. With our in-depth knowledge and experience, we help you navigate the complexities of the Act, ensuring timely and accurate gratuity payments to deserving employees.
                                    </p> */}
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            
        </div>
    )
}

export default Services;