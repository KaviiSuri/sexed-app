import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Signup = () => {
	const [part, setPart] = useState(1)

	return (
		<div className='signup-container'>
			<div className='signup-content'>
				{part === 1 ? (
					<div>
						<h1 className='signup-heading'>Hey! Welcome</h1>
						<div className='signup-subheading'>
							Please fill in the following details
						</div>
						<input
							type='text'
							name='Name'
							placeholder='Your Name'
							className='signup-input'
						/>
						<input
							type='date'
							name='DOB'
							placeholder='Data of Birth'
							className='signup-input'
						/>
						<input
							type='text'
							name='Gender'
							placeholder='Gender'
							className='signup-input'
						/>
						<div className='signup-privacy'>
							<input type='checkbox' name='privacy' />
							by signing up you agree to our Terms of Service and Privacy
							Policy.
						</div>
					</div>
				) : null}
				{part === 2 ? (
					<div>
						<h1 className='signup-heading'>
							So, What are you doing right now?
						</h1>
						<div className='signup-subheading'>I am currently a</div>
						<div className='signup-input'>
							<input type='radio' name='Name' />
							Student
						</div>
						<div className='signup-input'>
							<input type='radio' name='Name' />
							Teacher
						</div>
						<div className='signup-input'>
							<input type='radio' name='Name' />
							Parent
						</div>
					</div>
				) : null}
				{part === 3 ? (
					<div>
						<h1 className='signup-heading'>Let’s get this done!</h1>
						<div className='signup-subheading'>
							Fill in the following details
						</div>
						<input
							type='email'
							name='Name'
							placeholder='Your Name'
							className='signup-input'
						/>
						<input
							type='password'
							name='Password'
							placeholder='Password'
							className='signup-input'
						/>
						<input
							type='password'
							name='Retype Password'
							placeholder='Confirm Password'
							className='signup-input'
						/>
					</div>
				) : null}
			</div>
			<div className='signup-content'>
				{part === 3 ? (
					<Link to='/discover'>
						<button className='sign-up-button'>CONTINUE</button>
					</Link>
				) : (
					<button className='sign-up-button' onClick={() => setPart(part + 1)}>
						CONTINUE
					</button>
				)}
				<p className='login-p'>
					<Link to='/'>Cancel</Link>
				</p>
			</div>
		</div>
	)
}

export default Signup
