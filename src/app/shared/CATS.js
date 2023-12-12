export const CATS = [
    {
      name: 'Abigail',
      friendliness: 'friendly',
      preferredInteractions: ['petting', 'treats', 'playing'],
      mood: 'happy',
      favoriteTreat: 'tuna',
      relationshipLevel: 0,
    },
    {
      name: 'Oscar',
      friendliness: 'reserved',
      preferredInteractions: ['treats', 'playing'],
      mood: 'grumpy',
      favoriteTreat: 'salmon',
      relationshipLevel: 0,
    },
    // ... Add more cat objects here with varying characteristics
    {
      name: 'Luna',
      friendliness: 'friendly',
      preferredInteractions: ['petting', 'playing'],
      mood: 'content',
      favoriteTreat: 'chicken',
      relationshipLevel: 0,
    },
    // Add more cats as needed
  ];

//   export const selectAllCats = (state) => {
//     return state.cats.catsArray;
// };

// export const selectCatByName = (name) => (state) => {
//     return state.cat.catsArray.find(
//         (cat) => cat.name === parseInt(name)
//     );
// };

// export const selectFeaturedCat = (state) => {
//     return state.cats.catsArray.find((cat) => cat.featured);
// };

 // const handleTreatsAction = () => {
  //   handleTreats(cat);
  //   setInteractionMessage('Offering treats to Abigail...');
  // };

  // const handlePlayingAction = () => {
    
  //   handlePlaying(cat); 
  //   setInteractionMessage('Playing with Abigail...');
  // };