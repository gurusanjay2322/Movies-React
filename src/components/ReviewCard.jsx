import React from 'react';

function ReviewCard({ review }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <p className="text-gray-400 italic bg-gray-800">"{review.body}"</p>
      <p className="text-right text-sm text-gray-500 bg-gray-800">- {new Date(review.id.date).toLocaleDateString()}</p>
    </div>
  );
}

export default ReviewCard;
