import { useNavigate } from 'react-router-dom';
import NeighborhoodMapSVG from './NeighborhoodMapSVG.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectCat } from './features/cats/catsSlice';
import { CATS } from './app/shared/CATS.js';


const FictionalNeighborhoodMap = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCatClick = (event) => {
  
    const clickedCat = event.target.parentElement.parentElement.id;
    const otherClickedCat= "Luna";
 
    console.log(clickedCat); // this is the name of the cat that was clicked on
   

    dispatch(selectCat(clickedCat));


// Navigate to the cat interaction view
    navigate('/cat-interaction');


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
