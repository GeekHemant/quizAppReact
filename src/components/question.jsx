import React, { useContext } from 'react'
import { HandleContext } from './mainPage'


function Question() {

    const context = useContext(HandleContext)

    return (
        <div>
            <h1> Q. { context.quiz.paper[context.quiz.current].que } </h1>
        </div>
    )
}

export default Question
