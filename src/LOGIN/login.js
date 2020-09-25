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

			//FOR LOGIN
			axios
				.post('http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login', {
					username: 'necesariosimon',
					password: '67969dcc4364e0c0',
				})
				.then(function (response) {
					console.log(response.data);
					setIsLoaded(true);
					setToken(response.data);
				})
				.catch(function (error) {
					setError(error);
					setIsLoaded(true);
					console.log(error);
				});
		} else {
			setError('Invalid login credentials');
		}
	}

	if (token.length > 0) {
		return <Redirect to='/Form' />;
	} else {
		return (
			<div style={styles.container}>
				<h4>Login</h4>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						name='username'
						ref={register({
							required: true,
							pattern: /^[A-Za-z]+$/i,
						})}
						style={{ ...styles.input, borderColor: errors.username && 'red' }}
						placeholder='Username'
					/>
					<input
						name='password'
						ref={register({
							required: true,
						})}
						style={{ ...styles.input, borderColor: errors.password && 'red' }}
						placeholder='Password'
					/>
					<button type='submit' disabled={formState.isSubmitting}>
						Submit
					</button>
				</form>
				<div>{error}</div>
			</div>
		);
	}
}
