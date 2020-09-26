import React from 'react'
import { Link } from 'react-router-dom'

import './Style.css'

const GettingStarted = () => {
	return (
		<div className='getting-started-container'>
			<div className='getting-started-content'>
				<div className='getting-started-title'>MORE Info.</div>
				<div className='getting-started-title'>Less Weird</div>
				<div className='getting-started-subheading'>
					Lorem ipsum dolor sit amet.
				</div>
				<div className='getting-started-subheading'>
					Lorem ipsum dolor sit amet.
				</div>
				<button className='sign-up-button'>Hi There</button>
				<p className='getting-started-p'>
					Already have an account?{' '}
					<Link to='/login' className='getting-started-p-login'>
						Log in
					</Link>
				</p>
			</div>
		</div>
	)
}

export default GettingStarted
