import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Form from './FORM/form.js';
import Login from './LOGIN/login.js';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Edit <code>src/App.js HELLO</code> and save to reload.
					</p>
					<ul>
						<li>
							<Link to='Form'>FORM</Link>
						</li>
						<li>
							<Link to='Login'>LOGIN</Link>
						</li>
					</ul>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'>
						Learn React
					</a>
				</header>

				<Switch>
					<Route exact path='Form'>
						<Form />
					</Route>
					<Route exact path='Login'>
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
