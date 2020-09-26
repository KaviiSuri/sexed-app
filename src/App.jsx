import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GettingStarted from './pages/GettingStarted/GettingStarted'
import Login from './pages/Login/Login'
import Signup from './pages/signup/signup'
import './App.css'
import Discover from './pages/Discover/Discover'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/signup'>
					<Signup />
				</Route>
				<Route path='/discover'>
					<Discover />
				</Route>
				<Route path='/' exact>
					<GettingStarted />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
