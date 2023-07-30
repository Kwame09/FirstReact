import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className= {`shadow-md flex w-full fixed top-0 left-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 ">
        <div className="flex items-center">
          <img src="./public/images/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="ml-2 text-xl font-bold">FindHouse</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-pink-400`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-pink-400`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-pink-400`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex w-80 justify-around">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Sign In
          </button>
          <p className="text-white p-4 bg-pink-600 rounded-3xl cursor-grab hover:text-pink-600 hover:bg-white hover:text-pink border hover:border-pink-500 px-4 py-2">
            + Create Listing
          </p>
        </div>
      </div>
    </header>
  );
};
