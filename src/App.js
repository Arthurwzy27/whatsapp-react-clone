import React from 'react';
import './App.scss';
import SideBar from './component/SideBar';
import Chat from './component/Chat';

const App = () => {
  return (
    <div className="App">
      <h1>Whatsapp clone</h1>
      <SideBar />
      <div className="app__body">
        <h2>Here it will be</h2>
        <Chat />
      </div>
    </div>

  )
}

export default App;
