import React, { useState } from 'react';
import aiResponses from '../data/aiResponses.json';
import { Button, TextField, Typography, IconButton } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const ChatWindow = ({ onConversationEnd }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [feedbackVisible, setFeedbackVisible] = useState(null);

  const handleSend = () => {
    if (input.trim() === '') return; 
  
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
  
    if (!aiResponses || !aiResponses.conversations) {
    //   console.error('AI responses data is missing or incorrect.');
      const responseMessage = { sender: 'ai', text: 'Sorry, I don’t have an answer for that.' };
      setMessages(prev => [...prev, responseMessage]);
      setInput('');
      return;
    }
  
    const aiResponse = aiResponses.conversations.find(c => c.question === input);
    const responseMessage = aiResponse
      ? { sender: 'ai', text: aiResponse.response }
      : { sender: 'ai', text: 'Sorry, I don’t have an answer for that.' };
  
    setMessages(prev => [...prev, responseMessage]);
    setInput('');
  };
  

  const endConversation = () => {
    onConversationEnd(messages);
  };

  return (
    <div>
      {messages.map((msg, idx) => (
        <div key={idx} style={{ margin: '10px 0' }}>
          <Typography variant="body1" style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            {msg.text}
          </Typography>
          {msg.sender === 'ai' && (
            <div onMouseEnter={() => setFeedbackVisible(idx)} onMouseLeave={() => setFeedbackVisible(null)}>
              {feedbackVisible === idx && (
                <>
                  <IconButton><ThumbUpAltIcon /></IconButton>
                  <IconButton><ThumbDownAltIcon /></IconButton>
                </>
              )}
            </div>
          )}
        </div>
      ))}
      <TextField value={input} onChange={e => setInput(e.target.value)} label="Type your message" fullWidth />
      <Button variant="contained" onClick={handleSend}>Send</Button>
      {messages.length > 0 && (
        <Button variant="outlined" onClick={endConversation}>End Conversation</Button>
      )}
    </div>
  );
};

export default ChatWindow;


