import React from 'react';
import BookList from './components/BookList';
import UserList from './components/UserList';
import BookSearch from './components/BookSearch';
import IssueBook from './components/IssueBook';


const App = () => {
  return (
    <div className="App">
      <h1>Library Management System</h1>
      {/* <BookList />
      <UserList /> */}
      <BookSearch />
      <IssueBook />
    </div>
  );
};

export default App;
