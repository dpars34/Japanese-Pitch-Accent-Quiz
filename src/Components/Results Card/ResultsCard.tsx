import React from 'react'

type Props = {
    nextQuestion: () => void;
    isCorrect: boolean;
}

const ResultsCard: React.FC<Props> = ({ nextQuestion, isCorrect }) => {
    return(
        <div>
            <p>{isCorrect ? "CORRECT!" : "INCORRECT!"}</p>
            <button onClick={nextQuestion}>Next Question</button>
        </div>
        
    )
}

export default ResultsCard