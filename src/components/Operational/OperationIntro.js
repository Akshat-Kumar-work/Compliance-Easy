import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";

function OperationIntro() {
  return (
    <>

               
                <div className=''>
                <div className="m-auto max-w-6xl p-2 md:p-5 h-5/6"  >

                    <div className="flex flex-col-reverse lg:flex-row py-0 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-2 justify-center">
                            <img alt="card img" className="rounded-t float-right" src="../operationalCompliance.jpg" />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl uppercase text-blue-900 font-bold">Our Approach</h3>
                            <br></br>
                            
                            <div>
                                <p className='my-3 text-1 text-gray-800 flex gap-5 '>
                                    <div><FaCalendarCheck/></div>
                                    <div><b className=' text-xl'> Comprehensive Compliance Services:</b> We offer a comprehensive suite of operational compliance services designed to empower businesses across industries. Our approach goes beyond mere adherence to regulations – we strive to enhance operational efficiency, mitigate risks, and foster a culture of compliance within your organization</div>
                                </p>
                            </div>
                            <div>
                                <p className='my-3 text-l text-gray-800 flex gap-5 '>
                                <div><FaCalendarCheck/></div>
                                <div><b className=' text-xl'>Tailored Solutions for Your Industry</b> Recognizing that each industry has its unique set of compliance challenges, our team of experts crafts tailored solutions to address your specific operational compliance needs. Whether you are in manufacturing, finance, healthcare, or any other sector, we have the knowledge and experience to guide you through the complexities of regulatory requirements.</div>
                                </p>
                            </div>
                            

                        </div>
                    </div>
                </div>
                </div>


        </>
  )
}

export default OperationIntro