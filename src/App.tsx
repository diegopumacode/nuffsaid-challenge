import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';
import Card from './components/card';
import Container from './components/container';
import Grid from './components/grid';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  return (
    <div>
      {/* {messages?.map?.(msg => <div key={msg?.message}>{msg?.message}</div>)} */}
    </div>
  );
}

export default App;
