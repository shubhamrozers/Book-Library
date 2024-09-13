import React, { useState } from 'react';
import { getTransactionsByBook } from '../api';

const Transactions = () => {
  const [bookName, setBookName] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSearch = async () => {
    const result = await getTransactionsByBook(bookName);
    setTransactions(result);
  };

  return (
    <div>
      <h2>Book Transactions</h2>
      <input
        type="text"
        placeholder="Enter book name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={handleSearch}>Search Transactions</button>

      <div>
        <h3>Transaction History</h3>
        {transactions.map((transaction) => (
          <div key={transaction.transactionId}>
            <p>Issued by: {transaction.userId}</p>
            <p>Issued on: {new Date(transaction.issueDate).toDateString()}</p>
            {transaction.returnDate && (
              <p>Returned on: {new Date(transaction.returnDate).toDateString()}</p>
            )}
            <p>Rent: ${transaction.rentCalculated}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
