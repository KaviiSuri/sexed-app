import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../vectors/logo.svg'

import './style.css'

const Login = () => {
	return (
		<div className='login-container'>
			<div className='login-content'>
				<img src={Logo} alt='' />
				<h1 className='login-heading'>
					Welcome back to <span style={{ color: '#FF5065' }}>Sex.in</span>
				</h1>
				<input
					type='email'
					name='Email'
					placeholder='Email Address'
					className='login-input'
				/>
				<input
					type='password'
					name='Email'
					placeholder='Password'
					className='login-input'
				/>
				<Link>
					<p className='forgot-password'>Forgot Password?</p>
				</Link>
				<Link to='/discover'>
					<button className='sign-up-button'>LOG IN</button>
				</Link>
				<p className='login-p'>
					Don't have an account ?{' '}
					<Link to='/signup' className='login-p-login'>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
