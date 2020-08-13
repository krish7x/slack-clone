import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2>Krish7x Developers</h2>
					<h3>
						<FiberManualRecordIcon />
						Krishna Kumar
					</h3>
				</div>
				<CreateIcon />
			</div>
			<SidebarOptions Icon={InsertCommentIcon} title="Threads" />
			<SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
			<SidebarOptions Icon={DraftsIcon} title="Saved Items" />
			<SidebarOptions Icon={BookmarBorderIcon} title="Channel Browser" />
			<SidebarOptions Icon={PeopleAltIcon} title="People & User Groups" />
			<SidebarOptions Icon={AppsIcon} title="Apps" />
			<SidebarOptions Icon={FileCopyIcon} title="File Browser" />
			<SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
			<hr />
			<SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
			<hr />
			<SidebarOptions Icon={AddIcon} title="Add Channels" />
		</div>
	);
};

export default Sidebar;
