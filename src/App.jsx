import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import GettingStarted from './pages/GettingStarted/GettingStarted'
import Login from './pages/Login/Login'
import './App.css'

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/' exact>
					<GettingStarted />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
