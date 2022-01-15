import React from 'react';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons/DonutLargeIcon';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
       <div className="sidebar__headerRight">
         <DonutLargeIcon />
         {/* <ChatIcon /> */}
         {/* <MoreVertIcon /> */}
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
