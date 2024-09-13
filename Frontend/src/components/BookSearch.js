import React, { useState } from 'react';
import { searchBooks } from '../api';

const BookSearch = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchBooks(term);
    setResults(data);
  };

  return (
    <div>
      <h2>Search for Books</h2>
      <input 
        type="text" 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
        placeholder="Enter book name" 
      />
      <button onClick={handleSearch}>Search</button>
      
      {results.map((book) => (
        <div key={book._id}>
          <p>{book.name} - {book.category} - ${book.rentPerDay} / day</p>
        </div>
      ))}
    </div>
  );
};

export default BookSearch;
