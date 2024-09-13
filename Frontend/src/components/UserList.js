import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {users.map((user) => (
        <div key={user._id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
