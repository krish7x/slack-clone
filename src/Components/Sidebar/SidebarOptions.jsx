import React from 'react';
import './SidebarOptions.css';

const SidebarOptions = ({ Icon, title }) => {
	return (
		<div className="sidebarOptions">
			{Icon && <Icon className="sidebarOptions__icon" />}
			{Icon ? (
				<h3 className="sidebarOptions__channel">{title}</h3>
			) : (
				<h3 className="sidebarOptions__channel">
					{' '}
					<span className="sidebarOptions__hash">#</span> {title}
				</h3>
			)}
		</div>
	);
};

export default SidebarOptions;
