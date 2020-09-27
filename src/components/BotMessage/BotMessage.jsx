import React from 'react'

import './Styles.css'

const BotMessage = (props) => {
    return (
        <div className='bot-message-container '>
            <div className="avatar"></div>
            <div className="message">
                {props.message.content}
            </div>
        </div>
    )
}

export default BotMessage
