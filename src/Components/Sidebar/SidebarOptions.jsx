import React from 'react';
import './SidebarOptions.css';
import { useHistory } from 'react-router-dom';
import db from '../../firebase/firebase';

const SidebarOptions = ({ Icon, title, id, addChannelOption }) => {
	const history = useHistory();

	const selectChannel = () => {
		if (id) {
			history.push(`/room/${id}`);
		} else {
			history.push(title);
		}
	};

	const addChannel = () => {
		const newChannel = prompt('Enter new channel name ');

		if (newChannel) {
			db.collection('rooms').add({
				name: newChannel
			});
		}
	};

	return (
		<div className="sidebarOptions" onClick={addChannelOption ? addChannel : selectChannel}>
			{Icon && <Icon className="sidebarOptions__icon" />}
			{Icon ? (
				<h3 className="sidebarOptions__channel">{title}</h3>
			) : (
				<h3 className="sidebarOptions__channel">
					<span className="sidebarOptions__hash">#</span> {title}
				</h3>
			)}
		</div>
	);
};

export default SidebarOptions;
