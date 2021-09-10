import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Message } from '../../Api'
import { CustomButton } from '../../components/button'
import { varsAnimation } from '../../styles/variants'
import { colorError, titlesError } from '../../utils/constants/error.constants'
import Card, { CardAction } from './../../components/card'

interface Props {
    status: "error" | "info" | "warn";
    messages: Array<Message>;
    messageDelete: (message: Message) => void;
}

const MessageCard: React.FC<Props> = ({ status, messages, messageDelete, ...props }) => {

    return useMemo(() => (
        <MessageStyled key={titlesError[status]}>
            <h2>{titlesError[status]}</h2>
            <p>Count {messages.length}</p>
            {
                messages.map((m: Message) => {
                    return (
                        <>

                            <Card key={m.id} background={colorError[status]} initial="initial" animate="animate" exit="exit" variants={varsAnimation}>
                                <p>{m.message}</p>
                                <CardAction>
                                    <CustomButton background="transparent" onClick={() => { messageDelete(m) }}>
                                        Clear
                                    </CustomButton>
                                </CardAction>
                            </Card>
                        </>
                    )
                }
                )
            }
        </MessageStyled>), [messages, status, messageDelete])
}

export default MessageCard;

const MessageStyled = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    position: relative;
`
