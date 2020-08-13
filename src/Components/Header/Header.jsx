import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTimeOutlined"
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/HelpOutline"

const Header = ({user}) => {
	return (
		<div className="header">
			{/* header component goes here */}
			<div className="header__left">
				<Avatar 
                    className = "header__avatar"
                    src = {user?.url}
                    alt = {user?.name}
                />
                <AccessTimeIcon />
				
			</div>
			<div className="header__search">
				<SearchIcon />
				<input type="text" placeholder = "Search here .."/>
			</div>
			<div className="header__right">
                <HelpIcon />
            </div>
		</div>
	);
};

export default Header;
