// Define the Cat object with initial attributes
const Cat = {
    name: 'Abigail',
    friendliness: 'neutral', // 'friendly', 'reserved', etc.
    preferredInteractions: ['petting', 'treats', 'playing'],
    mood: 'neutral', // 'happy', 'content', 'grumpy', etc.
    favoriteTreat: 'tuna', // Abigail's favorite treat
    relationshipLevel: 0, // Starting relationship level
  
    // Method to interact with the cat
    interact(action) {
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
    },

     // Method to simulate randomness in responses
  getRandomResponse(baseValue) {
    const randomFactor = Math.random(); // Get a random number between 0 and 1
    const variation = randomFactor * 3; // Set a variation factor

    // Calculate the response value with randomness
    const responseValue = baseValue - variation;
    return responseValue >= 0 ? responseValue : 0; // Ensure the response value doesn't go negative
  },
  
  handlePetting() {
    // Simulate Abigail's response to petting with randomness
    const baseValue = this.friendliness === 'friendly' ? 5 : 2; // Define base response value based on friendliness

    const responseValue = this.getRandomResponse(baseValue);

    if (responseValue > 0) {
      console.log(`Abigail responds to petting with a value of ${responseValue}.`);
      this.increaseRelationship(responseValue);
    } else {
      console.log('Abigail doesn\'t seem interested in petting right now.');
    }
  },

     // Updated method to handle treats interaction with randomness
  handleTreats() {
    // Simulate Abigail's response to treats with randomness
    const baseValue = this.mood === 'happy' ? 7 : 3; // Define base response value based on mood

    const responseValue = this.getRandomResponse(baseValue);

    if (responseValue > 0) {
      console.log(`Abigail responds to treats with a value of ${responseValue}.`);
      this.increaseRelationship(responseValue);
    } else {
      console.log('Abigail doesn\'t want treats at the moment.');
    }
  },
  
    // Method to handle playing interaction
    handlePlaying() {
      // Simulate Abigail's response to playing
      console.log('Abigail enjoys playing!');
      this.increaseRelationship(6); // Increase relationship level on positive interaction
    },
  
    // Method to increase relationship level
    increaseRelationship(value) {
      this.relationshipLevel += value;
      console.log(`Relationship level with ${this.name}: ${this.relationshipLevel}`);
    },
  };
  
  // Usage example:
  Cat.interact('petting'); // Simulate a petting interaction with Abigail
  Cat.interact('treats'); // Simulate offering treats to Abigail
  Cat.interact('playing'); // Simulate playing with Abigail
  