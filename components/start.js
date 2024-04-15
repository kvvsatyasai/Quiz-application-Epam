import React from 'react';
import './start.css'; 
import { Link } from 'react-router-dom';


const Start = ({ onStartClick }) => {
  return (
    <div className="start-container">
      <h1>Welcome to the Quiz App</h1>
      <p>Test your knowledge and have fun!</p>
      <Link to="/categories">
        <button>Explore Quizzes</button>
      </Link>    </div>
  );
};

export default Start;
