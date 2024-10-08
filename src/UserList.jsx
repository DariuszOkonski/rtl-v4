import React from 'react';

function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    return (
      <tr key={Math.random()} data-testid='user'>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid='users'>{renderedUsers}</tbody>
      </table>
    </div>
  );
}

export default UserList;
