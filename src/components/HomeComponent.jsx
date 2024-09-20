import React from 'react'

function HomeComponent() {
  return (
    <div className='text-white h-screen w-full flex justify-center items-center'>
      
      <div className=''>
        <p className='flex justify-center text-9xl font-Bebas text-[#FF4191] '>
          Movies
        </p>
        <p className='font-mono text-xl'>Your Only Destination For Movies</p>
        <div className='flex justify-center'>
          <button className='bg-[#FFF078] rounded-md text-2xl py-1 px-3 font-bold text-[#FF4191] font-Bebas hover:bg-[#E90074] flex justify-center items-center  hover:text-[#FFF078]'>
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
