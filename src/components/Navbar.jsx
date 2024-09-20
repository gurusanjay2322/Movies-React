import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='flex flex-row justify-between items-center p-4 bg-[#FFF078]'>
        <div>
          <p className='font-bold text-3xl text-[#FF4191] bg-[#FFF078] font-Bebas'>
            Movies
          </p>
        </div>
        <div className='flex flex-row justify-center'>
          <ul className='flex space-x-8 bg-[#FFF078]'>
            <Link
              to='/'
              className='cursor-pointer hover:text-blue-500 bg-[#FFF078] text-[#FF4191] text-3xl font-bold font-Bebas'
            >
              Home
            </Link>
            <Link
              to='/explore'
              className='cursor-pointer hover:text-blue-500 bg-[#FFF078] text-[#FF4191] text-3xl font-bold font-Bebas'
            >
              Explore
            </Link>
            <Link
              to='/login'
              className='cursor-pointer hover:text-blue-500 bg-[#FFF078] text-[#FF4191] text-3xl font-bold font-Bebas'
            >
              Login
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
