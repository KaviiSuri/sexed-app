import React from 'react'

import './Styles.css'

const ProfileCard = (props) => {
    return (
        <div className='profile-container'>
            <img src={props.img} alt={props.name}/>
            <span className="name">{props.name}</span>
        </div>
    )
}

export default ProfileCard
