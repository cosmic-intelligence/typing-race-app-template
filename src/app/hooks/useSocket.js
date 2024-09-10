import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = (userId, gameId) => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const socket = io('http://your-server-url', {
      query: { userId, gameId }
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('globalData', (data) => {
      console.log('Received global data:', data);
      
      // Assuming data is in the format of gamesSchema
      setGameData(data);
    });

    return () => {
      socket.disconnect();
      console.log('Disconnected from WebSocket');
    };
  }, [userId, gameId]);

  return gameData;
};

export default useSocket;
