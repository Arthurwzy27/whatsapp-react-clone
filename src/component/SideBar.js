import React from 'react';
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '../@material-ui/icons/DonutLargeIcon';
import ChatIcon from '../@material-ui/icons/Chat';
import MoreVertIcon from '../@material-ui/icons/MoreVertIcon';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
       <div className="sidebar__headerRight">
         <DonutLargeIcon />
         <ChatIcon />
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
