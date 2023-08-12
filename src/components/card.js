import React from "react";
import "./AllComponent.css";


const Card = () => {
  return (
    <div className="relative flex flex-col bg-white rounded-xl w-96 h-140 border-2 p-2 mb-11 ">
      <div className="">
        <img
          src={process.env.PUBLIC_URL + "/card1.jpg"}
          alt="Card"
          className="rounded-xl h-72 w-full"
        />

        <div className="absolute top-5 left-4 flex gap-4 h-14 p-2">
          <p className="h-8 w-20 flex justify-center items-center rounded-lg bg-red-500 text-white cursor-grab">Featured</p>
          <p className="h-8 w-20 flex justify-center items-center rounded-lg bg-gray-700 text-white cursor-grab">For Sale</p>
        </div>

        <div className="flex justify-between w-4/5 items-center absolute top-64 left-10 awesome">
          
          <h2 className="text-white text-xl font-semibold cursor-grab">$13000 <span className="text-white text-sm font-semibold">/mo</span></h2>

          <div className="flex gap-3 text-white">
            <i class="fa-sharp fa-regular fa-heart icon"></i>
            <i class="fa-solid fa-right-left icon"></i>
          </div>

        </div>

      </div>



      <div className="flex flex-col gap-3 p-2">
        <p className="text-red-500">Apartment</p>
        <p className="text-gray-700 font-bold hover:text-red-500 cursor-grab">Luxury Family Home</p>
        <p className="text-gray-500">1421 San Pedrp St, Los Angeles, CA 900015</p>

        <div className="flex gap-5">
        <p className="text-gray-500 cursor-grab">Beds: 1</p>
        <p className="text-gray-500 cursor-grab">Baths: 1</p>
        <p className="text-gray-500 cursor-grab">SqFt: 8280</p>
        </div>

        
        <div className="flex flex-col">
          <div className="border border-gray-300 w-full"></div>
          <p className="w-full flex justify-center text-gray-500 m-0 p-0">1 year ago</p>
        </div>

        <div className="flex items-center">
          <img className="h-16 w-16 mr-4 border border-gray-100 shadow-inner rounded-full"  src={process.env.PUBLIC_URL + "/pass1.jpg"} alt="profile pic" />
          <p className="text-gray-500 ">John Dave</p>
        </div>
        


      </div>
    </div>
  );
};

export default Card; 
