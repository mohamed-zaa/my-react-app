const UserList = ({ users }) => {
  return (
    <div>
      <h2>User  Lists</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users in here</p>
      )}
    </div>
  );
};

export default UserList;
