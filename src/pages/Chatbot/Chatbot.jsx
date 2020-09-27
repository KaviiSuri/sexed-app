import React, {useState} from 'react'
import MessageBox from '../../components/MessageBox/MessageBox'
import BotMessage from '../../components/BotMessage/BotMessage'
import UserMessage from "../../components/UserMessage/UserMessage"

import './Styles.css'
import SearchBox from '../../components/SearchBox/SearchBox'
import db from './db.json'

const Chatbot = () => {
    const [messageFeed, setMessageFeed] = useState([
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
        getReply(newMessage)
    }
    const getReply = (userMessage) => {
        console.log(message)
        setMessage('')
        const newMessage = {
            sender_id: 1,
            content: db[message] || "Sorry, I don't know that... Consider asking an expert",
            timestamp: Date.now()
        }

        setMessageFeed([...messageFeed, userMessage, newMessage])

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
