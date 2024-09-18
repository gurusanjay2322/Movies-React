import React from 'react';
import Navbar from './components/Navbar';
// import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* Include Navbar */}
      <Navbar />
      
      {/* The Outlet renders the matching route component */}
      <main className="min-h-screen p-4">
        <Outlet />
      </main>

      {/* Include Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
