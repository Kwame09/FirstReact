import React, {useState } from 'react';
import "./AllPages.css";
import Carousel from '../components/carousel';
import Card  from '../components/card';

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



            <section className="bg-white text-black p-4 ">
                <Carousel/>
            </section>

            <section>
              <Card/>
            </section>

            <section className="bg-green-500 text-white p-4 w-full">
                <h1 className='text-3xl font-bold'>Section 3</h1>
            </section>

            <section className="bg-yellow-500 text-white p-4">
                <h1 className='text-3xl font-bold'>Section 4</h1>
            </section>

            <section className="bg-red-500 text-white p-4">
                <h1 className='text-3xl font-bold'>Section 5</h1>
            </section>
        
        </div>

    );
}