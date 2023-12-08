
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NeighborhoodMapSVG from './NeighborhoodMapSVG.jsx'

import { NavLink } from 'react-router-dom';

const FictionalNeighborhoodMap = () => {
  const navigate = useNavigate();

  const handleCatClick = (event) => {
    const clickedElement = event.target;

    // Check if the clicked element or its ancestor is within the 'OrangeCat' group
    let isOrangeCatClicked = false;
    let currentElement = clickedElement;

    // Check current and parent elements for OrangeCat ID
    while (currentElement) {
      if (currentElement.id === 'OrangeCat') {
        isOrangeCatClicked = true;
        break;
      }
      currentElement = currentElement.parentElement;
    }

    if (isOrangeCatClicked) {
      // Perform actions specific to the 'OrangeCat' group
      console.log('Clicked on OrangeCat!');
      // Navigate to the cat interaction view or other actions
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

//Next step is to move to different view when OrangeCat is clicked.
// if (catAttribute === 'OrangeCat') {
    //   console.log('Inside handleCatClick and we know cat is orange');
    //   // Navigate to the cat interaction view
    //   navigate('/cat-interaction');
    // }