// SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp({ handleSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ username, password });
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/">Already have an account? Login</Link>
    </div>
  );
}

export default SignUp;
