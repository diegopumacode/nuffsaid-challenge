import React, { useEffect, useState } from 'react'
import { Message } from '../../Api'
import { CustomButton } from '../../components/button'
import Container from '../../components/container'
import Grid from '../../components/grid'
import MessageCard from './message'

interface Props {
    messages: Array<Message>;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    stopMessage: () => void;
    messageDelete: (message: Message) => void;
    stop:boolean
}

interface MessageStatus {
    error: Array<Message>;
    warn: Array<Message>;
    info: Array<Message>
}

const MessageList: React.FC<Props> = ({ messages, setMessages, stopMessage, messageDelete, stop }: any) => {

    const [messageListState, setMessageListState] = useState<MessageStatus>({ error: [], warn: [], info: [] })


    useEffect(() => {
        setMessageListState({
            error: messages.filter((message: any) => message?.priority === 0),
            warn: messages.filter((message: any) => message?.priority === 1),
            info: messages.filter((message: any) => message?.priority === 2)
        })
    }, [messages])



    return (
        <Container>
            <Container display="flex" justify="center" align="center" gap="1" mb="30" mt="30">

                <CustomButton onClick={stopMessage}>
                    {stop ? "play": "stop"}
                </CustomButton>
                <CustomButton onClick={() => { setMessages([]) }}>
                    Clear
                </CustomButton>
            </Container>
            <Grid>
                <MessageCard status="error" messages={messageListState.error} messageDelete={messageDelete} />
                <MessageCard status="warn" messages={messageListState.warn} messageDelete={messageDelete} />
                <MessageCard status="info" messages={messageListState.info} messageDelete={messageDelete} />
            </Grid>
        </Container>
    )
}

export default MessageList;