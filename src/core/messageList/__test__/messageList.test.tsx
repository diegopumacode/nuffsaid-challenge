import { Message } from "../../../Api";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageList from "..";


const messages: Array<Message> = [
    {
        id: 1,
        message: "error",
        priority: 0,
    },
    {
        id: 2,
        message: "warn",
        priority: 1,
    },
    {
        id: 3,
        message: "info",
        priority: 2,
    },
]

const setMessages = jest.fn();
const stopMessage = jest.fn();
const messageDelete = jest.fn();
const stop = false;

const propsMessageList = {
    messages,
    setMessages,
    stopMessage,
    messageDelete,
    stop
}
describe("Messages",()=>{
    beforeEach(()=> render(<MessageList {...propsMessageList}/>))

    test("Should render text messages", () => {
        const errorMessage = screen.getByText("error");
        const warnMessage = screen.getByText("warn");
        const infoMessage = screen.getByText("info");
        
    
        expect(errorMessage).toBeInTheDocument();
        expect(warnMessage).toBeInTheDocument();
        expect(infoMessage).toBeInTheDocument();
    });

    
    

})