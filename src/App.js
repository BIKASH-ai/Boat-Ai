import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import FeedbackModal from './components/FeedbackModal';
import ConversationsList from './components/ConversationsList';
import FeedbackTable from './components/FeedbackTable';
import { Container, Button } from '@mui/material';

const App = () => {
  const [conversations, setConversations] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleEndConversation = (messages) => {
    setConversations([...conversations, { messages }]);
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = (feedbackData) => {
    setFeedback([...feedback, feedbackData]);
  };

  return (
    <Container>
      <ChatWindow onConversationEnd={handleEndConversation} />
      <ConversationsList conversations={conversations} onConversationClick={() => {}} />
      <FeedbackModal open={showFeedback} onClose={() => setShowFeedback(false)} onSubmit={handleFeedbackSubmit} />
      <Button onClick={() => setShowFeedback(true)}>View Feedback</Button>
      <FeedbackTable feedback={feedback} />
    </Container>
  );
};

export default App;
