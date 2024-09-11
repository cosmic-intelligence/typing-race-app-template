/* Any hard calculations or logic that is used across multiple components should be done in the utils file. These are function that do not update state, but rather return a value needed to update. */

// Calculate the accuracy of the user's typing
export const calculateAccuracy = (userInput, typingText) => {
  let correct = 0;
  let total = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === typingText[i]) {
      correct++;
    }
    total++;
  }
  return (correct / total) * 100;
};

// Calculate the speed of the user's typing
export const calculateSpeed = (userInput, typingText) => {
  const time = new Date().getTime();
  const speed = (userInput.length / time) * 60;
  return speed;
};