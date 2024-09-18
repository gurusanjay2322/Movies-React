import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center p-4'>
      <div>
        <p className='text-lg font-semibold'>Movies</p>
      </div>
      <div className='flex flex-row justify-center'>
        <ul className='flex space-x-8'>
          <Link to='/' className='cursor-pointer hover:text-blue-500'>Home</Link>
          <Link to='/explore' className='cursor-pointer hover:text-blue-500'>Explore</Link>
          <Link to='/login' className='cursor-pointer hover:text-blue-500'>Login</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
