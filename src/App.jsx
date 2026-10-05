

import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'xasan', email: 'xasan@email.com' },
    { id: 2, name: 'ali', email: 'ali@email.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
