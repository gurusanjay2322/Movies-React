import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
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
    } else {
      setIsVisible(true); // Always visible for other routes
    }
  }, [location]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 ${
          isVisible || location.pathname !== '/' ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex flex-row justify-between items-center p-4 bg-[#FFF078]'>
          <div className=''>
          <Link
                to='/'
                className='cursor-pointer  bg-[#FFF078] text-[#FF4191] text-3xl font-bold font-Bebas'
              >
                MOVIES
              </Link>
          </div>
          <div className='flex flex-row justify-center'>
            <ul className='flex space-x-8 bg-[#FFF078]'>
              <Link
                to='/'
                className='cursor-pointer hover:text-black hover:bg-[#FF4191]  bg-[#FFF078] text-[#FF4191] text-3xl font-bold font-Bebas hover:scale-105 transition ease-in-out'
              >
                Home
              </Link>
              <Link
                to='/explore'
                className='cursor-pointer hover:text-black hover:bg-[#FF4191] bg-[#FFF078] text-[#FF4191] text-3xl font-bold font-Bebas hover:scale-105 transition ease-in-out'
              >
                Explore
              </Link>
              
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          location.pathname !== '/'
            ? 'mt-[50px]'
            : ''
        }`}
      >
        
      </div>
    </>
  );
}

export default Navbar;
