import React, { useContext } from 'react'
import { HandleContext } from './mainPage'

function Result() {
    const context = useContext(HandleContext)

    return (
        <>
            <h1 className="result"> You have scored { context.quiz.marks }/{ context.quiz.paper.length } </h1>
        </>
    )
}

export default Result
