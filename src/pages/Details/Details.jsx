import React from 'react'
import { Link } from 'react-router-dom'

import VideoBlock from '../../components/video-block/VideoBLock'
import './style.css'

const Details = (props) => {
	return (
		<div className='details-container'>
			<div className='details-content'>
				<h1 className='details-heading'>Sexually Transmitted</h1>
				<hr
					style={{
						width: '60px',
						backgroundColor: '#FF5065',
						border: 'none',
						height: '3px',
						marginLeft: '0px',
					}}
				/>
				<VideoBlock />
				<VideoBlock />
				<VideoBlock />
				<Link>
					<button className='sign-up-button'>Take a test</button>
				</Link>
			</div>
		</div>
	)
}

export default Details
