import React from 'react';
import './App.css';
import { Typography, AppBar, makeStyles } from '@mui/material'


import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import  Notification  from './components/Notification';


function App() {
  return (
    <div className="App">
      <AppBar position="static" color="inherit">
        <Typography variant='h2' align='center'> Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options >
        <Notification />
      </Options>

    </div>
  );
}

export default App;
