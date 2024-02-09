import React from 'react'
import { Link } from 'react-router-dom';
import { FaCalendarCheck } from "react-icons/fa";

function StatutoryIntro() {
  return (
            <>

                <div id="services" className="bg-gray-100 py-12" >
                <div data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Ensuring Legal Integrity for Your Business</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-xl  text-blue-900">At ComplianceEazy, we understand the importance of statutory compliance in today's dynamic business environment. Navigating the complex landscape of laws and regulations is essential for maintaining the legal integrity of your organization. Our Statutory Compliance Services are designed to provide comprehensive solutions tailored to meet your business needs.</h2>
                    </div>
                </div>
                </div>
                <div className=''>
                <div className="m-auto max-w-6xl p-2 md:p-5 h-5/6"  >

                    <div className="flex flex-col-reverse lg:flex-row py-0 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src="./WhyPayroll.png" />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">Why Choose Our Statutory Compliance Services?</h3>
                            <br></br>
                            
                            <div>
                                <p className='my-3 text-l text-gray-600 flex gap-5 '>
                                    <div><FaCalendarCheck/></div>
                                    <div><b> Expert Guidance:</b> Our team of seasoned professionals keeps abreast of the latest legal developments, ensuring that your business stays compliant with ever-evolving statutory requirements.</div>
                                </p>
                            </div>
                            <div>
                                <p className='my-3 text-l text-gray-600 flex gap-5 '>
                                <div><FaCalendarCheck/></div>
                                <div><b>Customized Solutions:</b> We recognize that each business is unique. Our services are tailored to address the specific compliance challenges relevant to your industry, location, and organizational structure.</div>
                                </p>
                            </div>
                            <div>
                                <p className='my-3 text-l text-gray-600 flex gap-5 '>
                                <div><FaCalendarCheck/></div>
                                <div><b>Risk Mitigation:</b> Non-compliance can result in severe penalties and damage to your reputation. Our services are geared towards mitigating these risks, offering you peace of mind and allowing you to focus on your core business activities.</div>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>


        </>
  )
}

export default StatutoryIntro