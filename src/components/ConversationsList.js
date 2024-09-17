import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const ConversationsList = ({ conversations, onConversationClick }) => {
  return (
    <List>
      {conversations.map((conversation, idx) => (
        <ListItem button key={idx} onClick={() => onConversationClick(conversation)}>
          <ListItemText primary={`Conversation ${idx + 1}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default ConversationsList;
