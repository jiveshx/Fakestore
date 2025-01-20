import  { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const formattedData = response.data.map(user => ({ id: user.id, name: user.name, email: user.email }));
        setUsers(formattedData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Add User
  const addUser = () => {
    if (newUser.name && newUser.email) {
      const nextId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
      setUsers([...users, { id: nextId, ...newUser }]);
      setNewUser({ name: '', email: '' });
    }
  };

  // Edit User
  const editUser = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setNewUser({ name: user.name, email: user.email });
  };

  // Update User
  const updateUser = () => {
    if (currentUser && newUser.name && newUser.email) {
      setUsers(users.map((user) => (user.id === currentUser.id ? { ...currentUser, ...newUser } : user)));
      setIsEditing(false);
      setNewUser({ name: '', email: '' });
      setCurrentUser(null);
    }
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Management</h1>

      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button className="btn btn-warning" onClick={updateUser}>Update User</button>
        ) : (
          <button className="btn btn-primary" onClick={addUser}>Add User</button>
        )}
      </div>

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-sm btn-info me-2" onClick={() => editUser(user)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
