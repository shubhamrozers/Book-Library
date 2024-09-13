import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getAllBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      {books.map((book) => (
        <div key={book._id}>
          <p>{book.name} - {book.category} - ${book.rentPerDay} / day</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
