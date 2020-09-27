import React from 'react'

import './Styles.css'

const MessageBox = (props) => {
    return (
        <div className='message-box-container'>
            <input type="text" id='message-box' placeholder='Type Here...' value={props.value} onChange={props.handleChange}/>
            <span className='send-btn'>
                <i class="far fa-paper-plane"></i>
            </span>
        </div>
    )
}

export default MessageBox
