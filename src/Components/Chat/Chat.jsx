import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase/firebase';
import Message from './Message';
import ChatInput from "./ChatInput"

const Chat = () => {
	const { roomId } = useParams();

	const [ roomDetails, setRoomDetails ] = useState(null);
	const [ roomMessages, setRoomMessages ] = useState([]);

	useEffect(
		() => {
			if (roomId) {
				db.collection('rooms').doc(roomId).onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
			}

			db
				.collection('rooms')
				.doc(roomId)
				.collection('messages')
				.orderBy('timestamp', 'asc')
				.onSnapshot((snapshot) => {
					setRoomMessages(snapshot.docs.map((doc) => doc.data()));
				});
		},
		[ roomId ]
	);
	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__headerLeft">
					<h4 className="chat__channelName">
						<strong>#{roomDetails ? roomDetails.name : 'click channel'}</strong>
						<StarIcon />
					</h4>
				</div>
				<div className="chat__headerRight">
					<p>
						<InfoIcon />
						Details
					</p>
				</div>
			</div>
			<div className="chat__messages">
				{roomMessages.map(({ message, user, timestamp, userImage }, index) => (
					<Message user={user} userImage={userImage} message={message} timestamp={timestamp} key={index} />
				))}
			</div>
			<ChatInput 
				channelName = {roomDetails?.name}
				channelId = {roomId}
			/>
		</div>
	);
};

export default Chat;
