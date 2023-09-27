import React, { useState, useEffect } from 'react';

const Question = ({ question, onAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnswerSubmit(-1);
    }, 10000);

    return () => clearTimeout(timer); 
  }, [onAnswerSubmit]);


  const handleSubmit = () => {
    onAnswerSubmit(selectedOption);
  };

  const handleSelectOption = (e) => {
    const optionValue = parseInt(e.target.value, 10);
    setSelectedOption(optionValue);
  };

  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <form>
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="answer"
              value={index}
              onChange={handleSelectOption}
            />
            {option}
          </label>
        ))}
      </form>
      <br></br>
      <button onClick={handleSubmit}>Submit Response</button>
    </div>
  );
};

export default Question;
