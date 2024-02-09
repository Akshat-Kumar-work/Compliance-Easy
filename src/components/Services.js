import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

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
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="./Payroll-Processing.webp" />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Payroll Processing</h2>
                                    <p className="text-md font-medium">
                                    Our expert team handles payroll calculations, tax deductions, and compliance, ensuring accurate and timely payments to your employees
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Labour law consulting.webp" />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Labour Law Consulting</h2>
                                    <p className="text-md font-medium">
                                    Our experienced consultants help you understand and navigate complex labour legislation, including employment contracts, workplace policies, employee rights, and dispute resolution..
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Employee state insurance.webp" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Employee State Insurance act</h2>
                                    <p className="text-md font-medium">
                                    We provide comprehensive consulting services to help you understand and fulfill your obligations under the Act, including registration, contribution calculations, filing of ESI returns, and handling of ESI inspections.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Epf.webp" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">EPF Act</h2>
                                    <p className="text-md font-medium">
                                    Our dedicated team specializes in assisting businesses with compliance under the Employees' Provident Fund (EPF) Act. We provide end-to-end solutions, including EPF registration, contribution management, EPF calculation, filing of EPF returns, and handling EPF inspections.
                                    </p>
                                </div>
                            </div> 

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Labour-welfare.webp" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Labour Welfare Fund</h2>
                                    <p className="text-md font-medium">
                                    Our team specializes in providing comprehensive solutions for compliance with the Labour Welfare Fund (LWF). From registration and monthly contributions to fund management and reporting, we ensure seamless compliance with the LWF requirements.
                                    </p>
                                </div>
                            </div> 

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Factory.webp" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Factory Act</h2>
                                    <p className="text-md font-medium">
                                    We provide comprehensive consulting services to help you understand and fulfill your obligations under the Act, including factory registration, safety measures, working hour regulations, employment conditions, and welfare provisions. With our in-depth knowledge and experience, we assist in creating a safe and healthy work environment, minimizing occupational hazards, and ensuring compliance with statutory requirements.
                                    </p>
                                </div>
                            </div> 

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Minimum wages.jpg" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Minimum Wages Act</h2>
                                    <p className="text-md font-medium">
                                    We provide comprehensive consulting services to help you understand and fulfill your obligations related to minimum wage requirements. From accurate wage calculations to maintaining proper records and documentation, we ensure that your organization adheres to the prescribed minimum wage rates and regulations. 
                                    </p>
                                </div>
                            </div> 

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src="Paymentofgratuity.webp" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Payment Gratuity Act</h2>
                                    <p className="text-md font-medium">
                                    From eligibility calculations to documentation and fund management, we assist in creating a seamless process for gratuity disbursement. With our in-depth knowledge and experience, we help you navigate the complexities of the Act, ensuring timely and accurate gratuity payments to deserving employees.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            
        </div>
    )
}

export default Services;