import React, { useState } from 'react';
import { Modal, Box, Typography, Rating, Button, TextField } from '@mui/material';

const FeedbackModal = ({ open, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onSubmit({ rating, comment });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 3, backgroundColor: 'white', margin: 'auto' }}>
        <Typography variant="h6">Rate the conversation</Typography>
        <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Additional feedback"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
