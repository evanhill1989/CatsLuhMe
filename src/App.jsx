

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FictionalNeighborhoodMap from './FictionalNeighborhoodMap';
import FirstPersonCatInteraction from './components/FirstPersonCatInteraction'; // Your first-person cat interaction component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FictionalNeighborhoodMap/>} />
        <Route path="/cat-interaction" element={<FirstPersonCatInteraction/>} />
      </Routes>
    </Router>
  );
};

export default App;