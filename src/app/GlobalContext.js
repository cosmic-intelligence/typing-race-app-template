import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    gameId: "", // Unique identifier for the game session
    matchDuration: 0, // Duration of the match in minutes
    matchTimestamp: new Date(), // Timestamp of when the match started
    participants: [
      {
        userId: "", // Unique identifier for the user
        username: "", // Username of the player
        score: 0, // Score of the player
      },
      {
        userId: "", // Unique identifier for the opponent
        username: "", // Username of the opponent
        score: 0, // Score of the opponent
      }
    ],
    gameState: "waiting", // Current state of the game
    playerStats: {
      moves: [], // Array of moves made by the player
      // Add more player-specific stats as needed
    },
    opponentStats: {
      moves: [], // Array of moves made by the opponent
      // Add more opponent-specific stats as needed
    },
    winner: "", // Identifier for the winner of the match
    moves: [], // Array of all moves made during the game
  });

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};