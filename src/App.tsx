import { Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';
import Header from './components/header';
import MessageList from './core/messageList';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stop, setStop] = useState<boolean>(false);
  
  const [errorMessage, setErrorMessage] = useState<any>({ status: false, message: "" });

  useEffect(() => {
    if (!stop) {
      const cleanUp = generateMessage((msg: Message) => {
        setMessages(oldMessages => [...oldMessages, msg]);
        setErrorMessage(msg.priority === 0 ? { status: true, message: msg.message } : { status: false, message: "" })
      });
      return cleanUp;
    }
  }, [setMessages, stop, setErrorMessage]);

  const stopMessage = () => {
    setStop(!stop)
  }

  const messageDelete = (message: any) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <>
      <Header />
      <MessageList messages={messages}
        setMessages={setMessages}
        stopMessage={stopMessage}
        messageDelete={messageDelete}
        stop={stop} />
      <Snackbar anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
        open={errorMessage.status}
        autoHideDuration={2000}
        message={errorMessage.message} />
    </>
  );
}

export default App;
