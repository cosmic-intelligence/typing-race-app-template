import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const RaceDisplay = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  // Example usage
  const updateData = () => {
    setGlobalData({ ...globalData, newKey: 'newValue' });
  };

  return (
    <div>
      <RaceHud />
      <TypingContainer />
      <button onClick={updateData}>Update Global Data</button>
    </div>
  );
};

export default RaceDisplay;