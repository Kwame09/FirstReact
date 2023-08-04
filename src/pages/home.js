import React, {useState } from 'react';
import "./AllPages.css";
import Carousel from '../components/carousel';
import Card from '../components/card';

export const HomePage = ()=>{

    const [showPropertyType, setShowPropertyType] = useState(false);
    const [showPriceRange, setShowPriceRange] = useState(false);
  
    // Function to toggle the visibility of Property Type dropdown
    const togglePropertyType = () => {
      setShowPropertyType(!showPropertyType);
    };
  
    // Function to toggle the visibility of Price Range dropdown
    const togglePriceRange = () => {
      setShowPriceRange(!showPriceRange);
    };
  

    return(
       <div className='flex flex-col justify-center items-center  '>

            <section id='sec-1' className=" flex flex-col w-full text-blue p-4 z-0 relative h-full justify-center items-center" >
                <div className="background-filter"></div>
                
                <h1 className='text-5xl font-bold text-white p-6 z-10'>Find Your Dream Home</h1>
                <p className='text-white p-4 text-lg font-semibold z-10'>From as low as $10 per day with limited time offer discount</p>
                
                <div className="flex flex-col mt-16 w-10/12 z-10">

                    <div className="flex gap-6 justify-center">
                        <p className='bg-red-500 rounded-xl cursor-grab p-3 px-10'>Buy</p>
                        <p className='bg-white rounded-xl cursor-grab p-3 px-10'>Rent</p> 
                    </div>
                    
                    <div className="w-full h-28 border-8 border-white border-opacity-20 rounded-xl m-5 flex">
                      <div className="flex items-center w-full bg-white rounded-lg justify-around">
                        <div className="w-56 border border-gray-300 rounded-tl-lg rounded-tr-lg">
                          <input
                            type="text"
                            placeholder="Enter keyword......"
                            className="bg-gray-100 p-2 outline-none text-red-600 rounded-l w-full"
                          />
                        </div>

                        <div className="relative w-40 border border-gray-300 rounded-tl-lg rounded-tr-lg">
                          <button onClick={togglePropertyType} className="bg-gray-100 p-2 w-full">
                            Property Type
                          </button>
                          {/* Dropdown content */}
                          <ul
                            className={`absolute left-0 w-48 bg-white border border-gray-300 mt-2 p-2 ${
                              showPropertyType ? '' : 'hidden'
                            }`}
                          >
                            <li>Apartment</li>
                            <li>Bungalow</li>
                            <li>Condo</li>
                            <li>House</li>
                            <li>Land</li>
                            <li>Single Family</li>
                          </ul>
                        </div>

                        <div className="flex items-center w-52 border border-gray-300 rounded-tl-lg rounded-tr-lg">
                          <input type="text" placeholder="Location" className="outline-none bg-gray-100 p-2 w-full" />
                          <div className=" ">
                            <img src="" alt="Location Icon" className="h-6 w-6" />
                          </div>
                        </div>

                        <div className="flex flex-col items-center w-36 border border-gray-300 rounded-tl-lg rounded-tr-lg">
                          <button onClick={togglePriceRange} className="bg-gray-100 p-2 w-full">
                            Price
                          </button>
                          {/* Price Range Slider */}
                          <div className={`w-2/3 flex items-center ${showPriceRange ? '' : 'hidden'}`}>
                            <span className="text-sm mr-2">$10000</span>
                            <input type="range" min="10000" max="20000" className="flex-grow" />
                            <span className="text-sm ml-2">$20000</span>
                          </div>
                        </div>

                        <div className=" ml-4">
                          {/* Advanced section */}
                          <button className="text-black">Advanced</button>
                          <div className="bg-black text-white p-4 hidden">
                            <p>Amenities</p>
                          </div>
                        </div>
                        <button className="bg-red-500 text-white p-2 rounded-lg w-32 h-12 border-2 border-red-500 hover:bg-white hover:text-gray-800 font-semibold">Search</button>
                      </div>
                    </div>                        
                </div>
            </section>



            <section className=" text-gray-100 flex flex-col w-full justify-center items-center bg-gray-200 h-176 ">
              <div className='flex flex-col justify-center items-center gap-2 mt-20 mb-20'>

                <h1 className='text-gray-800 text-4xl font-bold'>Featured Properties</h1>
                <p className='text-gray-500'>Handpicked properties by our team</p>

              </div>

              <Carousel/>
            </section>

      

            <section className="bg-white pb-5 w-full h-176 flex flex-col justify-end  items-center gap-5">

                <div className='flex flex-col justify-center w-full items-center'>

                  <h1 className='text-gray-800 text-4xl font-bold'>Find Properties in These Cities</h1>
                  <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>

                <div className='flex flex-col w-full justify-center items-center gap-5'>

                  <div className='flex gap-6 w-full justify-center'>

                    <div className='bg-green-500 border h-96 rounded-xl w-3/12 overflow-hidden'>
                      <img className=' rounded-lg w-full h-full transform transition-transform duration-300 hover:scale-110' src={process.env.PUBLIC_URL + "/secGrid1.jpg"} alt="" />
                    </div>

                    <div className='bg-black border h-96 rounded-lg w-3/5 overflow-hidden'>
                      <img className='w-full h-full transform transition-transform duration-300 hover:scale-110' src={process.env.PUBLIC_URL + "/secGrid2.jpg"} alt="" /> 
                    </div>
                  </div>

                  <div className='flex  gap-6 w-full justify-center'>

                    <div className='bg-yellow-700 border h-96 rounded-lg w-3/5 overflow-hidden'>
                      <img className='w-full h-full transform transition-transform duration-300 hover:scale-110' src={process.env.PUBLIC_URL + "/secGrid3.jpg"} alt="" />
                    </div>
                    <div className='bg-red-700 h-96 border rounded-lg w-3/12 overflow-hidden'>
                      <img className='w-full h-full transform transition-transform duration-300 hover:scale-110' src={process.env.PUBLIC_URL + "/secGrid4.jpg"} alt="" />
                    </div>
                    
                    
                  </div>
                  


                </div>
            </section>


            <section className="bg-gray-200 p-4 w-full">
              <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-gray-800 text-4xl font-bold'>Why Choose US</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
              </div>

                

                <div className=" flex flex-col bg-white rounded-xl w-96 h-132 border-2 p-2 mb-11 ">
                    

                    <div className="flex flex-col p-2 justify-between border h-48">
                      
                      <div>
                        <div className='h-40 w-40 rounded-full bg-red-600 flex justify-center items-center font-3xl'>
                          <i class="fa-solid fa-house-chimney"></i> 
                        </div>
                      </div>

                      <div className='text-black'>
                        <h1>Trusted By Thousands</h1>
                        <p>Aliquam dictum elit vitae mauris 
                          facilisis at dictum urna dignissim donec 
                          vel lectus vel felis.
                        </p>


                      </div>
              
                    </div>

                </div>
                
            </section>










            <section className="bg-gray-200 w-full flex flex-col justify-evenly h-172">
                
                
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-gray-800 text-4xl font-bold'>Articles & Tips</h1>
                  <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='flex justify-evenly w-full'>
      
                  <div className=" flex flex-col bg-white rounded-xl w-96 h-132 border-2 p-2 mb-11 ">
                    <div className="">
                      <img
                        src={process.env.PUBLIC_URL + "/sCard1.jpg"}
                        alt="Card"
                        className="rounded-xl h-60 w-full"
                      />

                    </div>

                    <div className="flex flex-col p-2 justify-between border h-64">
                      <div>
                        <p className="text-red-500">Business</p>
                        <p className="text-gray-700 font-bold hover:text-red-500 cursor-grab">5 Essential Steps for Buying everyone Investment</p>
                      </div>


                      <div className="flex flex-col justify-between items-center h-28">
                        <div className='border border-gray-200 w-full flex '></div>

                        <div className='flex items-center w-full'>
                    
                          <img className="h-16 w-16 mr-4 border border-gray-100 shadow-inner rounded-full"  src={process.env.PUBLIC_URL + "/secCard1.jpg"} alt="profile pic" />
                          
                          <div className='flex w-full justify-between'>
                            <p className="text-gray-600 text-sm ">Kwame Appiah</p>
                            <p className="text-gray-600 text-sm ">2nd August, 2023</p>
                          </div>
                          

                        </div>

                        
                      </div>
                      
                    </div>
                  </div>

                  <div className=" flex flex-col bg-white rounded-xl w-96 h-132 border-2 p-2 mb-11 ">
                    <div className="">
                      <img
                        src={process.env.PUBLIC_URL + "/sCard2.jpg"}
                        alt="Card"
                        className="rounded-xl h-60 w-full"
                      />

                    </div>

                    <div className="flex flex-col p-2 justify-between border h-64">
                      <div>
                        <p className="text-red-500">Construction</p>
                        <p className="text-gray-700 font-bold hover:text-red-500 cursor-grab">Bedroom Colors You will Never this Regret</p>
                      </div>


                      <div className="flex flex-col justify-between items-center h-28">
                        <div className='border border-gray-200 w-full flex '></div>

                        <div className='flex items-center w-full'>
                    
                          <img className="h-16 w-16 mr-4 border border-gray-100 shadow-inner rounded-full"  src={process.env.PUBLIC_URL + "/secCard2.jpg"} alt="profile pic" />
                          
                          <div className='flex w-full justify-between '>
                            <p className="text-gray-600 text-sm ">Sarah Mensah</p>
                            <p className="text-gray-600 text-sm ">2nd August, 2023</p>
                          </div>
                          

                        </div>

                        
                      </div>
                      
                    </div>
                  </div>

                  <div className=" flex flex-col bg-white rounded-xl w-96 h-132 border-2 p-2 mb-11 ">
                    <div className="">
                      <img
                        src={process.env.PUBLIC_URL + "/sCard3.jpg"}
                        alt="Card"
                        className="rounded-xl h-60 w-full"
                      />

                    </div>

                    <div className="flex flex-col p-2 justify-between border h-64">
                      <div>
                        <p className="text-red-500">Business</p>
                        <p className="text-gray-700 font-bold hover:text-red-500 cursor-grab">5 Essential Steps for Buying everyone Investment</p>
                      </div>


                      <div className="flex flex-col justify-between items-center h-28">
                        <div className='border border-gray-200 w-full flex '></div>

                        <div className='flex items-center w-full'>
                    
                          <img className="h-16 w-16 mr-4 border border-gray-100 shadow-inner rounded-full"  src={process.env.PUBLIC_URL + "/secCard3.jpg"} alt="profile pic" />
                          
                          <div className='flex w-full justify-between'>
                            <p className="text-gray-600 text-sm ">Salima Muna</p>
                            <p className="text-gray-600 text-sm ">2nd August, 2023</p>
                          </div>
                          

                        </div>

                        
                      </div>
                      
                    </div>
                  </div>

                </div>

            </section>



            <section className="flex flex-col w-full">
                
                <div className='flex flex-col justify-between pb-7 w-full h-96 mt-9'>
                  
                  <div className='flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-gray-800 text-4xl font-bold'>Our Partners</h1>
                    <p className='text-gray-500'>We only work with the best companies around the globe</p>
                  </div>

                  <div className='flex items-center justify-evenly w-full h-52 relative'>
                    <img className='w-64 h-64' src={process.env.PUBLIC_URL + "/estatelogo1.jpg"} alt="" />
                    <img className='w-64 h-64' src={process.env.PUBLIC_URL + "/estatelogo2.jpg"} alt="" />
                    <img className='w-64 h-64' src={process.env.PUBLIC_URL + "/estate3.jpg"} alt="" />
                    <img className='w-48 h-40' src={process.env.PUBLIC_URL + "/estatelogo4.png"} alt="" />
                    <img className='w-64 h-64' src={process.env.PUBLIC_URL + "/estatelogo5.jpg"} alt="" />

                    <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-40'></div>
                  </div>

                </div>

                <div className='bg-red-500 flex h-40 w-full  items-center justify-evenly'>
                  
                  <div className='text-white '>
                    <h1 className='font-bold text-4xl'>Become a Real Estate Agent</h1>
                    <p>We only work the best companies around the globe</p>
                  </div>

                  <div>
                    <p className='pl-16 pr-16 pt-4 pb-4 bg-red-400 rounded-lg cursor-grab text-white hover:bg-white hover:text-red-500'>Register </p>

                  </div>

                </div>

            </section>
        
        </div>

    );
}