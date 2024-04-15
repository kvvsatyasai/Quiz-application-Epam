import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gk.css'; 

const Gk = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const questions = [
    {
      text: 'What is the capital of France?',
      options: ['Paris', 'London', 'Rome', 'Berlin'],
      answer: 0,
    },
    {
      text: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
      answer: 0,
    },
    {
      text: 'What is the smallest country in the world?',
      options: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
      answer: 0,
    },
    {
      text: 'What is the largest ocean in the world?',
      options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
      answer: 0,
    },
    {
      text: 'What is the tallest mountain in the world?',
      options: ['Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      answer: 0,
    },
  ];

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleStartAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
  };

  // Function to navigate to another page
  const navigateToCategories = () => {
    navigate('/categories');
  };

  if (quizCompleted) {
    const percentageScore = ((score / questions.length) * 100).toFixed(2);
    return (
      <div className="quiz-card">
        <p>You answered {correctAnswers} out of {questions.length} questions correctly!</p>
        <p>You answered {incorrectAnswers} questions incorrectly.</p>
        <p>Your percentage score: {percentageScore}%</p>
        <center><button onClick={handleStartAgain}>Start Again</button></center>
        {/* Button to navigate to Categories.js */}
        <button className="navigate-button" onClick={navigateToCategories}>Try another quiz</button>
      </div>
    );
  }

  return (
    <center>
      <div className="quiz-card">
        <h2>{questions[currentQuestion].text}</h2>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={option}>
            <button className="option-button" onClick={() => handleAnswerOptionClick(index)}>
              {option}
            </button>
          </div>
        ))}
        <br />
        <button onClick={handleNextQuestion} className="next-button">Next</button>
      </div>
    </center>
  );
};

export default Gk;
