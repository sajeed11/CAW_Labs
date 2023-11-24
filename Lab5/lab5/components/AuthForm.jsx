import React, { useState } from "react";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if both username and password are provided
    if (username.trim() !== "" && password.trim() !== "") {
      // Add the user to the list
      setUsers([...users, { username }]);

      // Clear the form fields
      setUsername("");
      setPassword("");
    }
  };

  const handleDeleteUser = (index) => {
    // Remove the user at the specified index
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
        <label>
          Username: <br />
          <input
            className="border-2 border-gray-500 rounded-md p-1"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <br />
          <input
            className="border-2 border-gray-500 rounded-md p-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="bg-yellow-500">Submit</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username}
            <button className="m-2" onClick={() => handleDeleteUser(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthForm;
