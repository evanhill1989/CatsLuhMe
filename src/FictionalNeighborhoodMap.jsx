
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NeighborhoodMapSVG from './NeighborhoodMapSVG.jsx'

import { NavLink } from 'react-router-dom';

const FictionalNeighborhoodMap = () => {
  const navigate = useNavigate();

  const handleCatClick = (event) => {
    const clickedElement = event.target;
    const catAttribute = clickedElement.getAttribute('data-cat');

    if (catAttribute === 'OrangeCat') {
      // Navigate to the cat interaction view
      navigate('/cat-interaction');
    }
  };

  return (
    <div className="neighborhood-map">
      <div onClick={handleCatClick}>
        

         

        <NeighborhoodMapSVG />
      </div>
    </div>
  );
};

export default FictionalNeighborhoodMap;
