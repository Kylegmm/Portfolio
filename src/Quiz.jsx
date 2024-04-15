import React, { useState } from 'react';

const questions = [
  {
    text: "What's my favorite food?",
    options: ['Pizza', 'Sushi', 'Pasta', 'Burgers'],
    answer: 'Pizza'
  },
  {
    text: "Which sport do I like the most?",
    options: ['Football', 'Basketball', 'Tennis', 'Swimming'],
    answer: 'Basketball'
  },
  {
    text: "What type of music do I enjoy?",
    options: ['Rock', 'Jazz', 'Classical', 'Pop'],
    answer: 'Jazz'
  },
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setShowModal(true); // Show modal when quiz ends
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setShowModal(false);
  };

  return (
    <div className="quiz">
      {showModal && (
        <div className="modal">
          <h2>Quiz Completed!</h2>
          <div className="content">
            <p>You scored {score} out of {questions.length}</p>
            <ul>
              {questions.map((question, index) => (
                <li key={index}>{question.text} - Correct answer: {question.answer}</li>
              ))}
            </ul>
            <button onClick={restartQuiz}>Restart Quiz</button>
          </div>
        </div>
      )}

      {!showScore ? (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].text}</div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={restartQuiz}>Restart Quiz</button>
      )}
    </div>
  );
}

export default Quiz;
