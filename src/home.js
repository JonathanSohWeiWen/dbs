import React, { useState, useEffect } from 'react';
import './App.css';

function Home() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
		const axios = require('axios').default;

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
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return <div>{token}</div>;
	}
}

export default Home;
