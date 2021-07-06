import React, { useState } from 'react';
import questionsData from './questionsData'

//Components
import QuestionCard from "./Components/Question Card/QuestionCard"

const TOTAL_QUESTIONS = 10;

function App() {

  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ userAnswer, setUserAnswer ] = useState([])
  const [ score, setScore ] = useState(0)
  const [ gameOver, setGameOver ] = useState(true)

  const checkAnswer = (e: React.MouseEvent) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Japanese Pitch Accent Quiz</h1>
      <QuestionCard 
        questionNumber={questionNumber + 1} 
        totalQuestions={TOTAL_QUESTIONS} 
        question={questionsData[questionNumber].question} 
        answers={questionsData[questionNumber].answers} 
        userAnswer={ userAnswer ? userAnswer[questionNumber] : undefined}
        callback={checkAnswer}/>
    </div>
  );
}

export default App;
