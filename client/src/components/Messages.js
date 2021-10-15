import { useEffect, useState } from 'react';

import { Box } from 'grommet';

export default function Messages(props) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        return newMessages;
      })
    }

    const deleteMessageListener = (messageId) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[messageId];
        return newMessages;
      });
    }

    props.socket.on('message', messageListener);
    props.socket.on('deleteMessage', deleteMessageListener);
    props.socket.emit('getMessages');

    return () => {
      props.socket.off('message', messageListener);
      props.socket.off('deleteMessage', deleteMessageListener);
    };
  }, [props.socket]);

  return(
    <Box>
      {[...Object.values(messages)].length === 0 ? "No messages" : [...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <Box
            key={message.id}
            title={`Sent at ${new Date(message.time).toLocaleDateString()}`}
          >
            <span>{message.user.name}</span>
            <span>{message.value}</span>
            <span>{new Date(message.time).toLocaleDateString()}</span>
          </Box>
        ))}
    </Box>
  );
}