import { useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { GlobalContext } from '../GlobalContext';

const useSocket = (userId, gameId) => {
  const { updateGameState } = useContext(GlobalContext);

  useEffect(() => {
    const socket = io('http://your-server-url', {
      query: { userId, gameId }
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('globalData', (data) => {
      console.log('Received global data:', data);
      
      // Update the global game state with the received data
      updateGameState(data);
    });

    return () => {
      socket.disconnect();
      console.log('Disconnected from WebSocket');
    };
  }, [userId, gameId, updateGameState]);

  return null; // No need to return gameData as it's now in the global context
};

export default useSocket;
