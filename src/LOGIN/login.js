import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Login() {
	return (
		<div className='App'>
			<header className='App-header'>
				<form action="http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login" method="post">
					<p>Username:</p><input type="text" id="username" name="username"/>
					<p>Password:</p><input type="text" id="password" name="password"/>
					<br/><input type="submit" value="Submit"/>
			    </form>
			</header>
		</div>
	);
}

export default Login;
