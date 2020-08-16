/* eslint-disable no-empty-pattern */
import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase/firebase';
import { useStateValue } from '../../Context API/StateProvider';
import { actionTypes } from '../../Context API/reducer';

const Login = () => {
	const [ {}, dispatch ] = useStateValue();
	const handleSignin = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div className="login">
			<div className="login__container">
				<img src={require('../../Assets/slack-logo.png')} alt="" />
				<h2>Welcome krish7x developers</h2>
				<p>please login to continue</p>
				<Button onClick={handleSignin}>Signin With Google</Button>
			</div>
		</div>
	);
};

export default Login;
