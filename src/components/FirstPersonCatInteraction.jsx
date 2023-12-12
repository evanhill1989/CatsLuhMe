import { useState } from 'react';
import { handlePetting, handleTreats, handlePlaying } from '../utils/interactionHelpers';
 // Import the cat object
import { useSelector } from 'react-redux';


const FirstPersonCatInteraction = () => {
  const [interactionMessage, setInteractionMessage] = useState('');
  import { useDispatch, useSelector } from 'react-redux';
  import { addCatToRelationship } from '../actions/relationshipActions';

  const FirstPersonCatInteraction = () => {
    const dispatch = useDispatch();
    const cat = useSelector((state) => state.cats.selectedCat);
    const relationship = useSelector((state) => state.relationship);
    
    if (!relationship.includes(cat)) {
      dispatch(addCatToRelationship(cat));
    }
    

 

 

// Get the selected cat from the Redux store
 
  console.log(cat);
  const handlePettingAction = () => {
    console.log(cat);
    handlePetting(cat); // Pass the cat object to the interaction function
    setInteractionMessage('Petting Abigail...');
  };
  const handleTreatsAction = () => {
    handleTreats(cat);  //Pass the cat object to the interaction function
    setInteractionMessage('Giving Abigail treats...');
  };
  const handlePlayingAction = () => {
    handlePlaying(cat);  //Pass the cat object to the interaction function
    setInteractionMessage('Playing with Abigail...');
  };

 

  return (
    <div className="interaction-container">
      <h2>Interacting with Abigail</h2>
      <div className="interaction-buttons">
        <button onClick={handlePettingAction}>Pet </button>
        <button onClick={handleTreatsAction}>Offer Treats</button>
        <button onClick={handlePlayingAction}>Play with </button>
      </div>
      <p>{interactionMessage}</p> {/* Display interaction message */}
    </div>
  );
};

export default FirstPersonCatInteraction;