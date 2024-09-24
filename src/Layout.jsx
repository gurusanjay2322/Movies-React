import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <>
      <Navbar />
      <main className="p-4 ">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
