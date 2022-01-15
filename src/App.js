import React from 'react';
import './App.scss';
import SideBar from './component/SideBar';
import Chat from './component/Chat';

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="app__body">
        <Chat />
      </div>
    </div>

  )
}

export default App;
