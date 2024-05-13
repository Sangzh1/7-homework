// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ users }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      alert('Login successful!');
      // Navigate to home page or dashboard
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
}

export default Login;
