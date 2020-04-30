import React, { useState, setState, useContext } from 'react'
import Progress from './progress'
import Question from './question'
import Result from './result'
import Restart from './restart'
import Answer from './answer'
import { HandleContext } from './mainPage'



function HomeQuiz() {

    
    const context = useContext(HandleContext)

    const handleClick = () => {
        context.dispatch({ type: "wrong" })
    }

    // if( !context.quiz.showResult ) {
    if( context.quiz.current !== context.quiz.paper.length ) {
        return (
            <>
                <Progress />
                <Question />
                <Answer />
                <button onClick={ () => handleClick() } className="next" > confirm and continue </button> 
            </>
        )
    }
    return (
        <>
            <Result />
            <Restart  />
        </>
    )

}

export default HomeQuiz
