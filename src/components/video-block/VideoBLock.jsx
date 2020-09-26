import React from 'react'

import './style.css'

const VideoBLock = (props) => {
	return (
		<div className='iframe-container'>
			<iframe
				src={`https://www.youtube.com/embed/${props.video || 'dQw4w9WgXcQ'}`}
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
				class='iframe'
			/>
		</div>
	)
}

export default VideoBLock
