import React from 'react'

//Styles
import { CardWrapper, Button, ButtonContainer, LinkText } from '../../App.styles'
import { FlexContainer, QuestionNumber, ScoreCounter, Question } from './Question Card.styles'

type Props = {
    question: string;
    answers: string[];
    score: number;
    questionNumber: number;
    totalQuestions: number;
    callback: any;
    reset: () => void;
}

const QuestionCard: React.FC<Props> = ({ question, answers, score, questionNumber, totalQuestions, callback, reset }) => {
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
            <LinkText onClick={reset}>Retry Quiz</LinkText>
        </CardWrapper>
    )
}

export default QuestionCard