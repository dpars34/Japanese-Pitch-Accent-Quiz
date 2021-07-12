import React from 'react'

//Styles
import { CardWrapper, Button, ButtonContainer, Text } from '../../App.styles'
import { ResultTitle, Image, FlexContainer } from "./ResultsCard.styles"

type Props = {
    nextQuestion: () => void;
    isCorrect: boolean;
    explaination: string | undefined;
    image: string;
}

const ResultsCard: React.FC<Props> = ({ nextQuestion, isCorrect, explaination, image }) => {
    return(
        <CardWrapper margin={true}>
            <ResultTitle correct={isCorrect}>{isCorrect ? "CORRECT!" : "INCORRECT!"}</ResultTitle>
            <Text>{explaination}</Text>
            <FlexContainer>
                <Image src={image}></Image>
            </FlexContainer>
            <ButtonContainer>
                <Button onClick={nextQuestion}>Next Question</Button>
            </ButtonContainer>
        </CardWrapper>
        
    )
}

export default ResultsCard