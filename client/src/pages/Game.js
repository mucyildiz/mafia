import { useEffect, useState } from 'react';
import io from 'socket.io-client'

import { Box } from 'grommet';

import AppBar from '../components/AppBar';
import Messages from '../components/Messages';
import MessageInput from '../components/MessageInput';

export default function Game(props) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:5000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return(
    <Box>
      <AppBar />

      <p>Your game id is {props.location.state.id}</p>

      { socket ? (
        <Box>
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </Box>
      ) : (
        <p>Not Connected</p>
      )}
    </Box>
  );
}