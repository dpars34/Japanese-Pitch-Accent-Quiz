import React from 'react'

type Props = {
    question: string;
    answers: string[];
    score: number;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
    callback: any;
}

const QuestionCard: React.FC<Props> = ({ question, answers, score, userAnswer, questionNumber, totalQuestions, callback}) => {
    return (
        <div>
            <p className='number'> Question {questionNumber} / {totalQuestions}</p>
            <p className='question'>{question}</p>
            <p>Score : {score}</p>
            <div>
                {answers.map((answer) => (
                    <div>
                        <button disabled={userAnswer} value={answer} onClick={callback} >
                            <p>{answer}</p>
                        </button>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default QuestionCard