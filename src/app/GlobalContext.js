import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "", // Unique identifier for the user
    username: "", // Username of the user
    email: "", // Email of the user
    // Add more user-specific data as needed
  });

  const [game, setGame] = useState({
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
    winner: "", // Identifier for the winner of the match
  });

  const [leaderboard, setLeaderboard] = useState([]); // Initialize leaderboard state

  // Method to update the game state
  const updateGameState = (newGameState) => {
    setGame(prevGame => ({ ...prevGame, ...newGameState }));
  };

  return (
    <GlobalContext.Provider value={{ user, setUser, game, setGame, leaderboard, setLeaderboard, updateGameState }}>
      {children}
    </GlobalContext.Provider>
  );
};