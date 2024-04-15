import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import Gk from './Gk';
import ScienceQuiz from './ScienceQuiz'; // Import ScienceQuiz component
import FreedomFightersQuiz from './FreedomFightersQuiz';
import SocialSocietyRulesQuiz from './SocialSocietyRulesQuiz';

const Categories = () => {
  const categories = [
    { id: 1, name:' GeneralKnowledge', path: '/G-k' },
    { id: 2, name: 'Science', path: '/science-quiz' },
    { id: 3, name: 'History', path: '/freedom-quiz' },
    { id: 4, name: 'Social', path: '/social-quiz' },
  ];

  return (
    <div className="categories-container">
      <h2>Quiz Categories</h2>
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <h3>{category.name}</h3>
            <p>Test your knowledge in {category.name}.</p>
            <Link to={category.path}>
              <button>Start</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;