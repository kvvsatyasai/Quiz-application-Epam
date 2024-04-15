import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }


    if (username === 'demo' && password === 'demo') {
      console.log('Logged in successfully', { username, rememberMe });
      navigate('/start');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleRegister = () => {
    navigate('/register-path');
  };

  const handleForgotPassword = () => {
    // Implement logic for handling forgot password
    alert('Forgot password functionality will be implemented soon.');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
          <span className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
        <div className="form-group">
          <button type="submit">Login</button><br></br>
          {/* Add some space between the buttons */}
          <div style={{ marginBottom: '10px' }}></div>
          <button type="button" onClick={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
