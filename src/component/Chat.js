import React from 'react';
import Button from '@mui/material/Button';


const Chat = () => {
  return (
    <div>
      <div className="buttons">
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default Chat;
