import React from 'react'

//Styles
import { CardWrapper, Button, ButtonContainer, MainTitle, TextTitle, Text } from '../../App.styles'

type Props = {
    startQuiz: () => void;
}

const WelcomeCard: React.FC<Props> = ({ startQuiz }) => {
    return (
        <>
        <MainTitle>Japanese Pitch Accent Quiz</MainTitle>
        <CardWrapper margin={false}>
            <TextTitle>Welcome to the Japanese Pitch-Accent Quiz</TextTitle>
            <Text>This quiz tests your ability to hear pitch accent in spoken Japanese.</Text>
            <ButtonContainer>
                <Button onClick={startQuiz}>Start Quiz</Button>
            </ButtonContainer>
        </CardWrapper>
        </>
    )
}

export default WelcomeCard