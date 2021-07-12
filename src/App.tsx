import React, { useState } from 'react';
import questionsData from './questionsData'

//Components
import About from './Components/About/About'
import QuestionCard from './Components/Question Card/QuestionCard'
import WelcomeCard from './Components/Welcome Card/WelcomeCard'
import ResultsCard from './Components/Results Card/ResultsCard'
import FinalResultsCard from './Components/Final Results Card/FinalResultsCard'

//Styles

import { GlobalStyle, MainTitle } from "./App.styles"

const TOTAL_QUESTIONS = 10;

function App() {

  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ isCorrect, setIsCorrect ] = useState(true)
  const [ score, setScore ] = useState(0)
  const [ firstLoad, setFirstLoad ] = useState(true)
  const [ gameOver, setGameOver ] = useState(false)
  const [ resultsOnScreen, setResultsOnScreen] = useState(false)
  const [ aboutOnScreen, setAboutOnScreen ] = useState(false)

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

  const resetQuiz = () => {
    setQuestionNumber(0)
    setScore(0)
    setFirstLoad(true)
    setGameOver(false)
    setResultsOnScreen(false)
    setAboutOnScreen(false)
  }

  const toAbout = () => {
    setFirstLoad(false)
    setAboutOnScreen(true)
  }

  return (
    <>
    <GlobalStyle />
    <div className="App">
      {firstLoad ? <WelcomeCard startQuiz={startQuiz} toAbout={toAbout}/>
       : aboutOnScreen ? <About reset={resetQuiz}/>
       : resultsOnScreen ? <ResultsCard nextQuestion={nextQuestion} isCorrect={isCorrect} explaination={questionsData[questionNumber].explaination} image={questionsData[questionNumber].image}/>
       : gameOver ? <FinalResultsCard score={score} totalQuestions={TOTAL_QUESTIONS} resetQuiz={resetQuiz}/>
       : <QuestionCard 
        questionNumber={questionNumber + 1} 
        totalQuestions={TOTAL_QUESTIONS} 
        question={questionsData[questionNumber].question} 
        answers={questionsData[questionNumber].answers} 
        score={score}
        callback={checkAnswer}
        reset={resetQuiz}/>}
    </div>
    </>
  );
}

export default App;
