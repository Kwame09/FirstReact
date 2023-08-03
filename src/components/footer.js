import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from './copyright';

export const Footer = ()=>{

  return (
    <footer className='flex flex-col  w-full'>
      <div className='flex flex-wrap bg-[#24324a] h-108 pt-20 pb-20 justify-evenly items-evenly'>
        <div className='flex flex-col gap-7'>
          <h2 className='text-white'>About</h2>
          <p className='text-[#8a99b3] leading-10'>
            We're reimagining how you buy, sell and rent. <br/> 
            It's now easier to get into a place you love. So <br/>
            let's do this, together.
          
          </p>
        </div>

        <div className='flex flex-col gap-7'>
          <h2 className='text-white bold '>Quick Links</h2>

          <div className='flex flex-col leading-10 text-[#8a99b3]'>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">About Us</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">Terms & Conditions</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">User's Guide</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">suport Center</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">Press Info</a>
          </div>

        </div>

        <div className='flex flex-col gap-7'>
          <h2 className='text-white'>Contact Us</h2>

          <div className='flex flex-col leading-10 text-[#8a99b3]'>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">info@findhouse.core</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">Collins Street West, Victoria</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href=""> 8007, Australia</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">+233 23 565 9876</a>
            <a className='transition-transform hover:translate-x-4 duration-300' href="">+233 54 100 2090</a>
          </div>

        </div>

        <div className='flex flex-col gap-9'>
          <h2 className='text-white'>Follow us</h2>

          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 text-[#8a99b3] '> 
            <a className="hover:text-white" href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a className="hover:text-white" href="#"><i class="fa-brands fa-twitter"></i></a>
            <a className="hover:text-white" href="#"><i class="fa-brands fa-instagram"></i></a>
            <a className="hover:text-white" href="#"><i class="fa-brands fa-pinterest"></i></a>
            <a className="hover:text-white" href="#"><i class="fa-brands fa-pinterest"></i></a>

        

             

            </div>

            <h2 className='text-white'>Subscribe</h2>

            <div className=' flex gap-3'>
              <input className='bg-[#354765] outline-none text-gray-200 rounded-3xl pl-3 pr-3' type="text" placeholder='Your email' />
              <a className='text-white bg-[#354765] hover:bg-red-500 rounded-full p-5 pt-4 pb-3 pl-0.3 pr-0.3' href='#'> <i class="fa-solid fa-greater-than"></i> </a> 
            </div>

          </div>

         



        </div>

      </div>


      <div className='flex w-full justify-between text-white items-center h-28 bg-[#1d293e] pl-14 pr-14'>
        

        <div className='flex text-[#8a99b3] gap-3'>
          <a href="#">Home</a>
          <a href="">Listing</a>
          <a href="">Property</a>
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>

        <div className='flex'>
          <Copyright/>

        </div>
        
  
      </div>

      {/* 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
  */}
    </footer>
  )
}