import React, { useState } from 'react';
import { issueBook } from '../api';

const IssueBook = () => {
  const [bookName, setBookName] = useState('');
  const [userName, setUserName] = useState('');
  const [issueDate, setIssueDate] = useState('');

  const handleIssue = async () => {
    const response = await issueBook(bookName, userName, issueDate);
    alert(response.message);
  };

  return (
    <div>
      <h2>Issue a Book</h2>
      <input 
        type="text" 
        value={bookName} 
        onChange={(e) => setBookName(e.target.value)} 
        placeholder="Enter book name" 
      />
      <input 
        type="text" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        placeholder="Enter user name" 
      />
      <input 
        type="date" 
        value={issueDate} 
        onChange={(e) => setIssueDate(e.target.value)} 
      />
      <button onClick={handleIssue}>Issue</button>
    </div>
  );
};

export default IssueBook;
