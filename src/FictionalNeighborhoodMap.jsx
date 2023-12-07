
import NeighborhoodMap from './assets/NeighborhoodMap.svg'; // Replace with your SVG file path
import './App.css';

const FictionalNeighborhoodMap = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <img src={NeighborhoodMap} alt="Fictional Neighborhood Map" className="w-full max-w-md" />
    </div>
  );
};

export default FictionalNeighborhoodMap;
