import { useState, useEffect, useCallback } from 'react';

const initialGameState = {
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
};

const useGame = ({ userId, gameId }) => {
  const [gameState, setGameState] = useState({...initialGameState});

  // Start countdown timer function
  const startCountdown = useCallback(() => {
    setGameState(prevState => ({ ...prevState, countdown: 3 }));
    const interval = setInterval(() => {
      setGameState(prevState => ({ ...prevState, countdown: prevState.countdown - 1 }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const startGame = useCallback(() => {
    setGameState({
      ...initialGameState,
      gameId,
      participants: initialGameState.participants.map((participant, index) => ({
        ...participant,
        userId: index === 0 ? userId : participant.userId,
      })),
    });
    // Add logic to start the game
  }, [userId, gameId]);

  // update progress of player and opponent
  const updateProgress = useCallback((playerProgress, opponentProgress) => {
    setGameState(prevState => ({ ...prevState, playerProgress, opponentProgress }));
  }, []);

  const endGame = useCallback(() => {
    setGameState(prevState => ({ ...prevState, isGameOver: true }));
    // Add logic to end the game
  }, []);

  const updateScore = useCallback((points) => {
    setGameState(prevState => ({ ...prevState, score: prevState.score + points }));
    // Add logic to update the score
  }, []);

  const nextRound = useCallback(() => {
    setGameState(prevState => ({ ...prevState, round: prevState.round + 1 }));
    // Add logic to advance to the next level
  }, []);

  // Calculate WPM
  const calculateWPM = useCallback(() => {
    // TODO: Calculate WPM
    setGameState(prevState => ({ ...prevState, wpm: wordsPerMinute }));
  }, [gameState.playerProgress, gameState.countdown]);

  useEffect(() => {
    if (gameState.isGameOver) {
      // Handle game over logic
    }
  }, [gameState.isGameOver]);

  return {
    gameState,
    startGame,
    endGame,
    updateScore,
    nextRound,
    // Add other game-related functions here
  };
};

export default useGame;