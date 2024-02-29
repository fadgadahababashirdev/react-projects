import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../index.css';
export default function StarRating({ stars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(id) {
    setRating(id);
  }
  function handleEnter(id) {
    setHover(id);
  }
  console.log(rating, hover);
  return (
    <div className="flex justify-center h-screen items-center">
      {[...Array(stars)].map((_, index) => {
        let ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={ratingValue <= (hover || rating) ? 'active' : 'inactive'}
            size={40}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => handleEnter(ratingValue)}
        
          />
        );
      })}
    </div>
  );
}
