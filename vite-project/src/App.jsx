// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [users, setUsers] = useState([]);

  const handleSignUp = (user) => {
    setUsers([...users, user]);
    localStorage.setItem('users', JSON.stringify([...users, user]));
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path="/">
            <Login users={users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
