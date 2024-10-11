import './App.css';
import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import RoleExample from './RoleExample';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className='App'>
      <RoleExample />
      <hr />
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
