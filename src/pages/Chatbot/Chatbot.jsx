import React, {useState} from 'react'
import MessageBox from '../../components/MessageBox/MessageBox'
import BotMessage from '../../components/BotMessage/BotMessage'
import UserMessage from "../../components/UserMessage/UserMessage"

import './Styles.css'
import SearchBox from '../../components/SearchBox/SearchBox'

const Chatbot = () => {
    const [messageFeed, setMessageFeed] = useState([
        {sender_id: 0, content: 'Hey, This is from the user', timestamp: "2020-09-27T07:55:00.846Z"},
        {sender_id: 1, content: 'Hey, This is from the chatbot', timestamp: "2020-09-27T07:55:01.846Z"},
        {sender_id: 0, content: 'So.. I had a question', timestamp: "2020-09-27T07:55:00.846Z"},
        {sender_id: 1, content: 'Please go ahead and ask...', timestamp: "2020-09-27T07:55:01.846Z"},

    ])
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        const newMessage = {
            sender_id: 0,
            content: message,
            timestamp: Date.now()
        }
        setMessageFeed([...messageFeed, newMessage])
        console.log(newMessage)
        setMessage('')
    }
    return (
        <div className='chat-bot-container'>
            <SearchBox />
            <div className="chats">
                {messageFeed.map((message, i) => {
                    if(message.sender_id === 0)
                        return <UserMessage message={message} />
                    else
                        return <BotMessage message={message} />
                })}
            </div>
             
            
            <MessageBox value={message} handleChange={e => setMessage(e.target.value)} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Chatbot
