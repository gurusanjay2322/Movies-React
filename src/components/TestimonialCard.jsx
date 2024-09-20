import React from 'react';

function TestimonialCard({ Name, imgSrc, content, bgColor }) {
  // Generate a random number of stars between 1 and 5
  const randomStars = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="shadow-lg rounded-lg p-6 max-w-sm mx-auto mb-4" style={{ backgroundColor: bgColor }}>
      <div className="flex items-center" style={{ backgroundColor: bgColor }}>
        {/* Profile image on the left */}
        <img
          src={imgSrc}
          alt="User Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />
        {/* Testimonial content on the right */}
        <div style={{ backgroundColor: bgColor }}>
          <h1 className="font-bold text-xl text-gray-800 mb-1" style={{ backgroundColor: bgColor }}>{Name}</h1>
          <p className="text-gray-600 mb-2" style={{ backgroundColor: bgColor }}>{content}</p>
          {/* Stars */}
          <div className="flex space-x-1 " style={{ backgroundColor: bgColor }}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span key={index} className={index < randomStars ? 'text-yellow-400' : 'text-gray-300'} style={{ backgroundColor: bgColor }}  >
                  ★
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
