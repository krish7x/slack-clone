import React, { useState } from 'react';
import './Chat.css';
import { Button } from '@material-ui/core';
import db from '../../firebase/firebase';
import firebase from 'firebase';
import { useStateValue } from '../../Context API/StateProvider';

const ChatInput = ({ channelName, channelId }) => {
	const [ input, setInput ] = useState('');

	const [ { user } ] = useStateValue();

	const sendMessage = (e) => {
		e.preventDefault();

		if (channelId) {
			db.collection('rooms').doc(channelId).collection('messages').add({
				message: input,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				user: user.displayName,
				userImage: user.photoURL
			});
		}

		setInput('');
	};

	return (
		<div className="chatInput">
			{channelName !== undefined && (
				<form onSubmit={sendMessage}>
					<input
						type="text"
						placeholder={`Message #${channelName}`}
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<Button onClick={sendMessage}>SEND</Button>
				</form>
			)}
		</div>
	);
};

export default ChatInput;
