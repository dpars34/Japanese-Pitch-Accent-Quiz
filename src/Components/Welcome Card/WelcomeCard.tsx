import React from 'react'

type Props = {
    startQuiz: () => void;
}

const WelcomeCard: React.FC<Props> = ({ startQuiz }) => {
    return (
        <div>
            <h1>This is the welcome card.</h1>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default WelcomeCard