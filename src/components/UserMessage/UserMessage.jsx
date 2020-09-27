import React from 'react'

import './Styles.css'

const UserMessage = (props) => {
    return (
        <div className='user-message-container '>
                {props.message.content}
        </div>
    )
}

export default UserMessage
