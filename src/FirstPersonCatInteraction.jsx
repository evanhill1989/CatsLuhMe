import React, { useState } from 'react';
import {Cat} from './abigail'; // Assuming the Cat object is imported or defined here

const FirstPersonCatInteraction = () => {
  const [interactionMessage, setInteractionMessage] = useState('');

  // Function to handle petting interaction with Abigail
  const handlePetting = () => {
    Cat.interact('petting'); // Simulate petting interaction with Abigail
    setInteractionMessage('You pet Abigail.'); // Update interaction message for UI display
  };

  // Function to handle offering treats to Abigail
  const handleTreats = () => {
    Cat.interact('treats'); // Simulate offering treats to Abigail
    setInteractionMessage('You offer treats to Abigail.'); // Update interaction message for UI display
  };

  // Function to handle playing with Abigail
  const handlePlaying = () => {
    Cat.interact('playing'); // Simulate playing with Abigail
    setInteractionMessage('You play with Abigail.'); // Update interaction message for UI display
  };

  return (
    <div className="interaction-container">
      <h2>Interacting with Abigail</h2>
      <div className="interaction-buttons">
        <button onClick={handlePetting}>Pet Abigail</button>
        <button onClick={handleTreats}>Offer Treats</button>
        <button onClick={handlePlaying}>Play with Abigail</button>
      </div>
      <p>{interactionMessage}</p> {/* Display interaction message */}
    </div>
  );
};

export default FirstPersonCatInteraction;

