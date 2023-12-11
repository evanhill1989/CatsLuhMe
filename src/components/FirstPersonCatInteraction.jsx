import { useState } from 'react';
import { handlePetting, handleTreats, handlePlaying } from '../utils/interactionHelpers';
import { Cats } from '../data/cats/cats'; // Import the cat object
import { useSelector } from 'react-redux';
import { selectCatById } from '../features/cats/catsSlice';

const FirstPersonCatInteraction = () => {
  const [interactionMessage, setInteractionMessage] = useState('');
  
  const cat = useSelector(selectCatById(catId));

  const handlePettingAction = () => {
    handlePetting(cat); // Pass the cat object to the interaction function
    setInteractionMessage('Petting Abigail...');
  };

  const handleTreatsAction = () => {
    handleTreats(cat); // Pass the cat object to the interaction function
    setInteractionMessage('Offering treats to Abigail...');
  };

  const handlePlayingAction = () => {
    handlePlaying(cat); // Pass the cat object to the interaction function
    setInteractionMessage('Playing with Abigail...');
  };

  return (
    <div className="interaction-container">
      <h2>Interacting with Abigail</h2>
      <div className="interaction-buttons">
        <button onClick={handlePettingAction}>Pet {`${cat.name}`}</button>
        <button onClick={handleTreatsAction}>Offer Treats</button>
        <button onClick={handlePlayingAction}>Play with {`${cat.name}`}</button>
      </div>
      <p>{interactionMessage}</p> {/* Display interaction message */}
    </div>
  );
};

export default FirstPersonCatInteraction;