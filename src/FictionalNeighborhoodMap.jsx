import { useNavigate } from 'react-router-dom';
import NeighborhoodMapSVG from './NeighborhoodMapSVG.jsx';
import { Cats } from './data/cats/cats'; // Import the cat object
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

const FictionalNeighborhoodMap = () => {
  // const [selectedCat, setSelectedCat] = useState(null);
  const navigate = useNavigate();

  const handleCatClick = (event) => {
    // we need to identify the cat that was clicked on
    // we need to find the cat in the cats array
    // we need to set the selected cat
    // we need to navigate to the cat interaction view



    const clickedElement = event.target;
    const clickedElementID = clickedElement.parentElement.parentElement.id;
    // determine if elementID is === Cats[i].name using an appropriate array method
    console.log(clickedElementID);
    const foundCat = Cats.find(cat => cat.name === clickedElementID);
    console.log(foundCat);
    const placeInArray = Cats.indexOf(foundCat);

    // setSelectedCat(foundCat);

// Navigate to the cat interaction view
    navigate('/cat-interaction', placeInArray);



 
    
      // navigate('/cat-interaction');
      // navigate('/cat-interaction', { state: { cat: foundCat } });
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