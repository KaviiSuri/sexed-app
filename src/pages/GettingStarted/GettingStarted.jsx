import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../vectors/logo.svg'
import './Style.css'

const GettingStarted = () => {
	return (
		<div className='getting-started-container'>
			<div className='getting-started-content'>
				<img src={Logo} alt='Logo' />
				<div className='getting-started-title'>MORE Info.</div>
				<div className='getting-started-title'>Less Weird</div>
				<div className='getting-started-subheading'>
					Lorem ipsum dolor sit amet.
				</div>
				<div className='getting-started-subheading'>
					Lorem ipsum dolor sit amet.
				</div>
				<Link to='/signup'>
					<button className='sign-up-button'>Get Started</button>
				</Link>
				<p className='getting-started-p'>
					Already have an account ?{' '}
					<Link to='/login' className='getting-started-p-login'>
						Log in
					</Link>
				</p>
			</div>
		</div>
	)
}

export default GettingStarted
