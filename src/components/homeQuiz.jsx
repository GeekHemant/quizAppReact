import React, { useState, setState } from 'react'
import Progress from './progress'
import Question from './question'
import Options from './options'
import Result from './result'
import Restart from './restart'

function HomeQuiz() {
    const paper = [
        {
            id: 1,
            que: "Do you love react?",
            ans_1: "yes",
            ans_2: "no",
            ans_3: "need some time",
            ans_4: "average",
            right: 3
        },
        {
            id: 2,
            que: "do you know redux",
            ans_1: "yes",
            ans_2: "no",
            ans_3: "little-bit",
            ans_4: "very well",
            right: 4
        }
    ]

    const [current, setCurrent] = useState(0)
    const [marks, setMarks] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const handleMarks = selected =>  {
        if( selected === paper[current].right ) {
            setMarks( marks + 1 )
        }
    }

    const handleNext = () => {
        ( current + 1 === paper.length ) ? setShowResult(true) : setCurrent( current + 1 )
    }

    const handleRestart = () => {
        setCurrent(0)
        setMarks(0)
        setShowResult(false)
    }


    if( !showResult ) {
        return (
            <>
                <Progress total={ paper.length} current={ current } />
                <Question question={ paper[current].que } />
                <Options option={ paper[current] }  increaseMarks={ (selected) => handleMarks(selected) } />
                <button onClick={ () => handleNext() } > confirm and continue </button>
            </>
        )
    }
    return (
        <>
            <Result marks={ marks } totalQuestion={ paper.length } />
            <Restart onClick={ () => handleRestart() } />
        </>
    )

}

export default HomeQuiz
