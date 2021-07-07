import React, { useState } from 'react';
import questionsData from './questionsData'

//Components
import QuestionCard from './Components/Question Card/QuestionCard'
import WelcomeCard from './Components/Welcome Card/WelcomeCard'
import ResultsCard from './Components/Results Card/ResultsCard'
import FinalResultsCard from './Components/Final Results Card/FinalResultsCard'

const TOTAL_QUESTIONS = 10;

function App() {

  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ userAnswer, setUserAnswer ] = useState([])
  const [ isCorrect, setIsCorrect ] = useState(true)
  const [ score, setScore ] = useState(0)
  const [ firstLoad, setFirstLoad ] = useState(true)
  const [ gameOver, setGameOver ] = useState(false)
  const [ resultsOnScreen, setResultsOnScreen] = useState(false)

  const startQuiz = () => {
    setFirstLoad(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userAnswer = e.currentTarget.value;
    const answer = questionsData[questionNumber].correctAnswer

    //If answer is correct
    if (userAnswer === answer) {
      setIsCorrect(true)
      setScore(prev => prev + 1)
    } else {
      setIsCorrect(false)
    }

    setResultsOnScreen(true)
  }

  const nextQuestion = () => {
    
    //Check if it is the last question
    if (questionNumber === TOTAL_QUESTIONS - 1) {
      setGameOver(true)
      setResultsOnScreen(false)
    } else {
      setQuestionNumber(prev => prev + 1)
      setResultsOnScreen(false)
    }
  }

  return (
    <div className="App">
      <h1>Japanese Pitch Accent Quiz</h1>
      {firstLoad ? <WelcomeCard startQuiz={startQuiz}/>
       : resultsOnScreen ? <ResultsCard nextQuestion={nextQuestion} isCorrect={isCorrect}/>
       : gameOver ? <FinalResultsCard/>
       : <QuestionCard 
        questionNumber={questionNumber + 1} 
        totalQuestions={TOTAL_QUESTIONS} 
        question={questionsData[questionNumber].question} 
        answers={questionsData[questionNumber].answers} 
        score={score}
        userAnswer={ userAnswer ? userAnswer[questionNumber] : undefined}
        callback={checkAnswer}/>}
    </div>
  );
}

export default App;
