import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const FeedbackTable = ({ feedback }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Conversation</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Comment</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {feedback.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{`Conversation ${idx + 1}`}</TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>{item.comment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FeedbackTable;
