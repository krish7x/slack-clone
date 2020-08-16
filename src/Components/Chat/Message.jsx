import React from 'react';
import './Chat.css';

const Message = ({ user, message, timestamp, userImage }) => {
	return (
		<div className="message">
			<img src={userImage} alt="user-pic" />

			<div className="message__info">
				<h4>
				{user} 
				<span className = "message__timestamp">
				{new Date(timestamp?.toDate()).toUTCString()}
				</span>
				 </h4>
				<p>{message}</p>
			</div>
		</div>
	);
};

export default Message;
