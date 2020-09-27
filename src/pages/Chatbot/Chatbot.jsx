import React, {useState} from 'react'
import MessageBox from '../../components/MessageBox/MessageBox'
import BotMessage from '../../components/BotMessage/BotMessage'
import UserMessage from "../../components/UserMessage/UserMessage"

import './Styles.css'

const Chatbot = () => {
    const [messageFeed, setMessageFeed] = useState([
        {sender_id: 0, content: 'Hey, This is from the user', timestamp: "2020-09-27T07:55:00.846Z"},
        {sender_id: 1, content: 'Hey, This is from the chatbot', timestamp: "2020-09-27T07:55:01.846Z"},
    ])
    const [message, setMessage] = useState('')
    const handleSubmit = () => {
        console.log('message sent!')
    }
    return (
        <div className='chat-bot-container'>
            <UserMessage message={messageFeed[0]} /> 
            <BotMessage message={messageFeed[1]} />
            <MessageBox value={message} handleChange={e => setMessage(e.target.value)} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Chatbot
