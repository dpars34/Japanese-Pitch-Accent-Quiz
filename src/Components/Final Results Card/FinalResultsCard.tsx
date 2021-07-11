import React from 'react'

//Styles
import { CardWrapper, Button, ButtonContainer, Title } from '../../App.styles'
import { ScoreDisplay } from './FinalResults.styles'

type Props = {
    score: number;
    totalQuestions: number;
    resetQuiz: () => void;
}

const FinalResultsCard: React.FC<Props> = ({ score, totalQuestions, resetQuiz }) => {
    return(
        <CardWrapper margin={true}>
            <Title>Final Results Card</Title>
            <ScoreDisplay>You scored {score} out of {totalQuestions}.</ScoreDisplay>
            <ButtonContainer>
                <Button onClick={resetQuiz}>Retry</Button>
            </ButtonContainer>
        </CardWrapper>
    )
}

export default FinalResultsCard