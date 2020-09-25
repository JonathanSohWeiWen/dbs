import React from 'react';
import logo from './logo.svg';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom';
import './App.css';
import Navigation from './ROUTER/navigation';
import Home from './home';
import Form from './FORM/form.js';
import Login from './LOGIN/login.js';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/Form' component={Form} />
					<Route path='/Login' component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
