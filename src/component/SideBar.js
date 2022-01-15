import React from 'react';
import Avatar from '@mui/material/Avatar';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
       <div className="sidebar__headerRight">
        <DataSaverOnIcon />
        <ChatBubbleOutlineIcon />
        <MoreVertIcon />
       </div>
      </div>

      <div className="sidebar__search">

      </div>

      <div className="sidebar__chats">

      </div>
    </div>
  )
}

export default SideBar;
