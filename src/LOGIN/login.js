import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Login() {
	function validate() {
						var username = document.getElementById("username");
						var password = document.getElementById("password");
						alert("hi");
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<form onsubmit="validate()"> 
					<p>Username:</p><input type="text" id="username" name="username"/>
					<p>Password:</p><input type="text" id="password" name="password"/>
					<br/><input type="submit" value="Submit"/>
			    </form>
			</header>
		</div>
	);
}

export default Login;
