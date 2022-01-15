import React from 'react';
import './Sidebar.scss';
import Avatar from '@mui/material/Avatar';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
      </div>

      <div className="sidebar__headerRight">
        <div className="sidebar__search">
          <SearchIcon />
          <p>Search...</p>
        </div>
        <DataSaverOnIcon />
        <ChatBubbleOutlineIcon />
        <MoreVertIcon />
      </div>


      <div className="sidebar__chats">

      </div>
    </div>
  )
}

export default SideBar;
