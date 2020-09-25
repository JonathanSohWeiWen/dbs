import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import './App.css';

function Home() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
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
	}, []);

	// const validateForm = {
	//     const axios = require('axios').default;
	//     axios
	// 		.post(
	// 			'http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/validateForm',
	// 			{
	// 				header: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: token,
	// 				},
	// 				customerName: 'Jophn',
	// 				customerAge: 12,
	// 				serviceOfficerName: 'Jason',
	// 				NRIC: 'S1234567A',
	// 				registrationTime: '17/07/1995 14:22:22',
	// 				branchCode: 7171,
	// 				image: null,
	// 				prorductType: ['Investor', 'Insurance'],
	// 			}
	// 		)
	// 		.then(function (response) {
	// 			console.log(token);
	// 			console.log(response.data);
	// 			setIsLoaded(true);
	// 		})
	// 		.catch(function (error) {
	// 			console.log(token);
	// 			setError(error);
	// 			setIsLoaded(true);
	// 			console.log(error);
	// 		});
	// };

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		if (token.length > 0) {
			return <Redirect to='/Form' />;
		} else {
			return <div>{token}</div>;
		}
	}
}

export default Home;
