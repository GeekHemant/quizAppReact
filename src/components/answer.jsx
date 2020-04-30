import React, { useContext } from 'react'
import { HandleContext } from './mainPage'


function Answer() {
    const context = useContext(HandleContext)

    const handleClick = selected => {
        if( context.quiz.paper[context.quiz.current].right === selected ) {
            context.dispatch({ type: "correct" })
        } else {
            context.dispatch({ type: "wrong" })
        }
    }

    return (
        <div>
            <div> <button className="options" onClick={ () => handleClick(1) } > { context.quiz.paper[context.quiz.current].ans_1 } </button> </div>
            <div> <button className="options" onClick={ () => handleClick(2) } > { context.quiz.paper[context.quiz.current].ans_2 } </button> </div>
            <div> <button className="options" onClick={ () => handleClick(3) } > { context.quiz.paper[context.quiz.current].ans_3 } </button> </div>
            <div> <button className="options" onClick={ () => handleClick(4) } > { context.quiz.paper[context.quiz.current].ans_4 } </button> </div>
        </div>
    )
}

export default Answer
