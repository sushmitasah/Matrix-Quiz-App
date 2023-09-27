
import Question from './Question';
import React, { useState, useEffect } from 'react';

const MatrixQuizApp = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizOver, setQuizOver] = useState(false);
  const [timer, setTimer] = useState(10); 
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    let countdown;

    if (!quizOver) {
      countdown = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          handleResponseSubmit(-1);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timer, quizOver]);

  const handleResponseSubmit = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers, selectedOption]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(10);
    } else {
      setQuizOver(true);
    }
  };
  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizOver(false);
    setTimer(10); 
    setShowAnswers(false); 
  }; 

  return (
    <div className="quiz-container">
      {quizOver ? (
        <div className="quiz-summary">
          <h2>Matrix Quiz Summary</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={toggleShowAnswers}>
            {showAnswers ? "Hide Answers" : "View Answers"}
          </button>
          <button onClick={restartQuiz}>Restart Matrix Quiz</button>
          {showAnswers && (
            <div className="answer-summary">
              <h3>Matrix Quiz: Answer Summary</h3>
              <ul>
                {questions.map((question, index) => (
                  <li key={index}>
                    Question {index + 1}: {question.options[question.correctAnswer]} ({userAnswers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>Time Left: {timer} seconds</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswerSubmit={handleResponseSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default MatrixQuizApp;
