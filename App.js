import React from 'react';
import MatrixQuizApp from './MatrixQuizApp';
import './App.css';


const App = () => {
  const questions = [
    {
      question: 'Which of the following is a non-renewable source of energy?',
      options: ['Natural gas', 'Solar power', 'Wind energy', 'Bio-mass'],
      correctAnswer: 0,
    },
    {
      question: 'What is the primary component of natural gas that makes it a valuable energy source?',
      options: ['Carbon dioxide (CO2)', 'Oxygen (O2)', 'Methane (CH4)', 'Hydrogen (H2)'],
      correctAnswer: 2,
    },
    {
      question: 'Solar panels convert sunlight into?',
      options: ['Natural gas', 'Electricity', 'Wind energy', 'Biomass'],
      correctAnswer: 1,
    },
    {
      question: 'Which renewable energy source relies on the movement of air to generate power?',
      options: ['Hydroelectricity', 'Geothermal energy', 'Wind energy', 'Biomass'],
      correctAnswer: 2,
    },
    {
      question: 'What is the main environmental advantage of using renewables compared to fossil fuels?',
      options: ['Renewables produce more carbon emissions', 'Renewables are less efficient', 'Renewables release greenhouse gases', 'Renewables have lower carbon emissions'],
      correctAnswer: 3,
    },
    {
      question: 'Which gas is a major contributor to the greenhouse effect and climate change?',
      options: ['Carbon dioxide (CO2)', 'Oxygen (O2)', 'Methane (CH4)', 'Hydrogen (H2)'],
      correctAnswer: 0,
    },
    {
      question: 'Geothermal energy is derived from?',
      options: ['The heat of the Earth-core', 'Combustion of organic matter', 'Solar radiation', 'Ocean tides'],
      correctAnswer: 0,
    },

  ];

  return (
    <div className="QuizApp">
      <h1>Matrix Quiz App</h1>
      <MatrixQuizApp questions={questions} />
    </div>
  );
};

export default App;
