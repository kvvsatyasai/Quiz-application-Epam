// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/login';
import Start from './components/start';
import Categories from './components/Categories';
import Gk from './components/Gk';
import ScienceQuiz from './components/ScienceQuiz';
import FreedomFightersQuiz from './components/FreedomFightersQuiz';
import SocialSocietyRulesQuiz from './components/SocialSocietyRulesQuiz';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/start" element={<Start />} />
          <Route path="/register-path" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/G-k" element={<Gk />} />
          <Route path="/science-quiz" element={<ScienceQuiz />} />
          <Route path="/freedom-quiz" element={<FreedomFightersQuiz />} />
          <Route path="/social-quiz" element={<SocialSocietyRulesQuiz />} />
          
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
