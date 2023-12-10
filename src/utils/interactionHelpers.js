// interactionHelpers.js

// Method to simulate randomness in responses
export const getRandomResponse = (baseValue) => {
    const randomFactor = Math.random(); // Get a random number between 0 and 1
    const variation = randomFactor * 3; // Set a variation factor
  
    // Calculate the response value with randomness
    const responseValue = baseValue - variation;
    return responseValue >= 0 ? responseValue : 0; // Ensure the response value doesn't go negative
  };
  
  // Method to handle petting interaction
  export const handlePetting = (cat) => {
    const baseValue = cat.friendliness === 'friendly' ? 5 : 2; // Define base response value based on friendliness
  
    const responseValue = getRandomResponse(baseValue);
  
    if (responseValue > 0) {
      console.log(`${cat.name} responds to petting with a value of ${responseValue}.`);
      cat.increaseRelationship(responseValue);
    } else {
      console.log(`${cat.name} doesn't seem interested in petting right now.`);
    }
  };

   // method to handle treats interaction with randomness
    export const handleTreats = (cat) => {
     const baseValue = cat.food === 'hungry' ? 5 : 2; // Define base response value based on food
      
     const responseValue = getRandomResponse(baseValue);
      
     if (responseValue > 0) {
        console.log(`${cat.name} responds to treats with a value of ${responseValue}.`);
        cat.increaseRelationship(responseValue);
     } else {
        console.log(`${cat.name} doesn't seem interested in treats right now.`);
     }
    };

  export const handlePlaying = (cat) => {   
    const baseValue = cat.playfulness === 'playful' ? 5 : 2; // Define base response value based on playfulness
  
    const responseValue = getRandomResponse(baseValue);
  
    if (responseValue > 0) {
      console.log(`${cat.name} responds to playing with a value of ${responseValue}.`);
      cat.increaseRelationship(responseValue);
    } else {
      console.log(`${cat.name} doesn't seem interested in playing right now.`);
    }
  };


  // Method to increase relationship level
  export const increaseRelationship = (value) => {
    this.relationshipLevel += value;
    console.log(`Relationship level with ${this.name}: ${this.relationshipLevel}`);
  };

     // Method to interact with the cat
     export const interact = (action) => {
    // Simulate interactions based on the action
    switch (action) {
      case 'petting':
        this.handlePetting();
        break;
      case 'treats':
        this.handleTreats();
        break;
      case 'playing':
        this.handlePlaying();
        break;
      default:
        console.log('Invalid interaction');
    }
  }

  
  // ... other interaction handling functions