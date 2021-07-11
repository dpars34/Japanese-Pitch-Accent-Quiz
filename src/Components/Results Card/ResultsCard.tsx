import React from 'react'

//Styles
import { CardWrapper, Button, ButtonContainer } from '../../App.styles'
import { ResultTitle } from "./ResultsCard.styles"

type Props = {
    nextQuestion: () => void;
    isCorrect: boolean;
}

const ResultsCard: React.FC<Props> = ({ nextQuestion, isCorrect }) => {
    return(
        <CardWrapper margin={true}>
            <ResultTitle correct={isCorrect}>{isCorrect ? "CORRECT!" : "INCORRECT!"}</ResultTitle>
            <ButtonContainer>
                <Button onClick={nextQuestion}>Next Question</Button>
            </ButtonContainer>
        </CardWrapper>
        
    )
}

export default ResultsCard