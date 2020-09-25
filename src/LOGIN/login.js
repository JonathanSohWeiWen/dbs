
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

const styles = {
	container: {
		width: '80%',
		margin: '0 auto',
	},
	input: {
		width: '100%',
	},
};

export default function Login() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [token, setToken] = useState('');
	const { register, handleSubmit, errors, formState } = useForm({
		mode: 'onBlur',
	});

	function onSubmit(data) {
		if (
			(data.username === 'necesariosimon' && data.password) ===
			'67969dcc4364e0c0'
		) {
			const axios = require('axios').default;
=======
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
