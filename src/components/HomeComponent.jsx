import React from 'react';
import { useNavigate } from 'react-router-dom';


function HomeComponent() {
  const navigate = useNavigate();
  const goToPage = ()=>{
    navigate('/explore')
  }
  return (
    <div className='text-white h-screen md:w-full flex justify-center items-center'>
      <div className=''>
        <h1 className='flex justify-center text-9xl font-Bebas text-[#FF4191] animatedText'>
          MOVIES
        </h1>
        <p className='font-mono text-xl mx-auto'>Your Only Destination For Movies</p>
        <div className='flex justify-center'>
          <button className='bg-[#FFF078] rounded-md text-2xl py-1 px-3 font-bold text-[#FF4191] font-Bebas hover:bg-[#E90074] flex justify-center items-center hover:text-[#FFF078] ' onClick={goToPage}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
  