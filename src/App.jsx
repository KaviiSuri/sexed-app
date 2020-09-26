import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GettingStarted from './pages/GettingStarted/GettingStarted'
import Login from './pages/Login/Login'
import Signup from './pages/signup/signup'
import Details from './pages/Details/Details'
import './App.css'
import Discover from './pages/Discover/Discover'
import DiscoverOpen from './pages/DiscoverOpen/DiscoverOpen'

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
				<Route path='/discoveropen'>
					<DiscoverOpen />
				</Route>
				<Route path='/details'>
					<Details />
				</Route>
				<Route path='/' exact>
					<GettingStarted />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
