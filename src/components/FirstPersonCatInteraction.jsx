import { useState } from 'react';
import { handlePetting, handleTreats, handlePlaying } from '../utils/interactionHelpers';
 // Import the cat object
import { useSelector } from 'react-redux';


const FirstPersonCatInteraction = () => {
  const [interactionMessage, setInteractionMessage] = useState('');

// Get the selected cat from the Redux store
  const cat = useSelector((state) => state.cats.selectedCat);
  console.log(cat);
  const handlePettingAction = () => {
    console.log(cat);
    // handlePetting(cat);  Pass the cat object to the interaction function
    // setInteractionMessage('Petting Abigail...');
  };

 

  return (
    <div className="interaction-container">
      <h2>Interacting with Abigail</h2>
      <div className="interaction-buttons">
        <button onClick={handlePettingAction}>Pet </button>
        {/* <button onClick={handleTreatsAction}>Offer Treats</button>
        <button onClick={handlePlayingAction}>Play with </button> */}
      </div>
      <p>{interactionMessage}</p> {/* Display interaction message */}
    </div>
  );
};

export default FirstPersonCatInteraction;