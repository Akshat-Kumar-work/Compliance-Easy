import React from 'react'
import {Link} from 'react-router-dom';

function StatutoryFooter() {
  return (
    <div id="" className="bg-gray-100 py-8" >
                <div data-aos="zoom-in-down">
                    <div className="my-4 py-2 border-black" >
                        <div>
                            <h2 className="my-4 text-center text-3xl text-blue-900 uppercase font-bold">Get in Touch for a Consultation!</h2>
                        </div>
                        
                        <div>
                            <div>
                                <h2 className="mt-6 mx-12 text-xl lg:text-xl font-semibold text-blue-900">Invest in the legal health of your business with ComplianceEazy's Statutory Compliance Services. Let us handle the complexities of regulatory requirements, allowing you to focus on what you do best – running and growing your business.</h2>
                                
                            </div>
                            <div className='flex justify-center py-6'>
                                <div>
                                    <h2 className="mt-4 mx-12  text-xl lg:text-xl font-semibold  text-blue-900">Contact us today for a consultation. Our experts are ready to discuss how our statutory compliance solutions can benefit your organization.</h2>
                                </div>
                                <div className="w-full lg:w-72 pt-6 lg:mx-12">
                                    <Link to="/contact" className=" bg-blue-600 hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Send a message
                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
    </div>
  )
}

export default StatutoryFooter