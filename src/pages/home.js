import React from 'react';
import "./AllPages.css";
import Carousel from '../components/carousel';

export const HomePage = ()=>{
    return(
       <div className='h-screen flex flex-col justify-center items-center  '>
            <section id='sec-1' className=" w-full text-blue p-4 z-0 relative" >
                
                
                <h1 className='text-3xl font-bold'>Find Your Dream Home</h1>
                <p>From as low as $10 per day with limited time offer discount</p>
                <div className="flew">
                    <p c>Buy</p>
                    <p>Rent</p>                                 

                </div>

            </section>

            <section className="bg-white text-black p-4 ">
                <div className="h-screen flex justify-center items-center bg-violet-500 relative z-0">
                    <Carousel />
                </div>
            </section>

            <section className="bg-green-500 text-white p-4">
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