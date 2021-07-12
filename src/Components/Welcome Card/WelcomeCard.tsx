import React from 'react'

//Styles
import { ButtonContainer, MainTitle, LinkTextWhite } from '../../App.styles'
import { WelcomeWrapper, WelcomeButton } from './Welcome Card.styles'

type Props = {
    startQuiz: () => void;
    toAbout: () => void;
}

const WelcomeCard: React.FC<Props> = ({ startQuiz, toAbout }) => {
    return (
        <WelcomeWrapper>
            <MainTitle>Japanese Pitch Accent Quiz</MainTitle>
            <ButtonContainer>
                <WelcomeButton onClick={startQuiz}>Start Quiz</WelcomeButton>
            </ButtonContainer>
            <LinkTextWhite onClick={toAbout}>What is pitch accent?</LinkTextWhite>
        </WelcomeWrapper>
    )
}

export default WelcomeCard