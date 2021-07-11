import React from 'react'

//Styles
import { CardWrapper, Button, ButtonContainer } from '../../App.styles'
import { FlexContainer, QuestionNumber, ScoreCounter, Question } from './Question Card.styles'

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
        <CardWrapper margin={true}>
            <FlexContainer>
                <QuestionNumber> Question {questionNumber} / {totalQuestions}</QuestionNumber>
                <ScoreCounter>Score : {score}</ScoreCounter>
            </FlexContainer>
            <Question>{question}</Question>
            <ButtonContainer>
                {answers.map((answer) => (
                    <div>
                        <Button value={answer} onClick={callback} >
                            <p>{answer}</p>
                        </Button>
                    </div>
                ))} 
            </ButtonContainer>
        </CardWrapper>
    )
}

export default QuestionCard