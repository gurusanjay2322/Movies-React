import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className=" mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Column 1: Logo & Tagline */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-[#FF4191] font-Bebas">MOVIE HUB</h1>
            <p className="mt-2 text-sm">Your Ultimate Destination for Movie Reviews</p>
          </div>

          {/* Column 2: Useful Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-3 text-[#FFF078]">Useful Links</h2>
            <ul>
              <li>
                <a href="/" className="hover:text-[#FF4191]">Home</a>
              </li>
              <li>
                <a href="/reviews" className="hover:text-[#FF4191]">Reviews</a>
              </li>
              <li>
                <a href="/explore" className="hover:text-[#FF4191]">Explore Movies</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#FF4191]">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-3 text-[#FFF078]">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4191]">
                <i className="fab fa-facebook-f">Facebook</i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4191]">
                <i className="fab fa-twitter">Twitter</i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4191]">
                <i className="fab fa-instagram">Instagram</i>
              </a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-[#FFF078]">Contact Info</h2>
            <ul>
              <li>Email: info@moviehub.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Location: Hollywood, CA</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Movie Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
