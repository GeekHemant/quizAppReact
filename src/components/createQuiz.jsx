import React, { useContext, useState } from 'react'
import { HandleContext } from './mainPage'
import HomeQuiz from './homeQuiz'
import Progress from './progress'

function CreateQuiz() {
    const context = useContext(HandleContext)

    const id = 1
    const [question, setQuestion] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")
    const [option4, setOption4] = useState("")
    const [correctOption, setCorrectOption] = useState()
    
    const [takeQuiz, setTakeQuiz] = useState(false)

    const submitHandler = e => {
        e.preventDefault()

        context.dispatch({ 
            type: "addQuestion", 
            id: id + 1,
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            correctOption: correctOption
        })
        context.dispatch({ type: "setDefaultPage"})
    }

    return (
        <>
            <form onSubmit={ (e) => submitHandler(e) } > 
                <div> <input className="userInput" type="text" value={ question } onChange={ e => setQuestion(e.target.value) } /> </div>
                <div> <input className="userInput" type="text" value={ option1 } onChange={ e => setOption1(e.target.value) }  /> </div>
                <div> <input className="userInput" type="text" value={ option2 } onChange={ e => setOption2(e.target.value) }  /> </div>
                <div> <input className="userInput" type="text" value={ option3 } onChange={ e => setOption3(e.target.value) }  /> </div>
                <div> <input className="userInput" type="text" value={ option4 } onChange={ e => setOption4(e.target.value) }  /> </div>
                <div> <input className="userInput" type="number" value={ correctOption } onChange={ e => setCorrectOption(e.target.value) } /> </div>
                <button className="createQuiz"> submit </button>
            </form>
            {/* <button onClick={ context.dispatch({ type: "setQuizPage" }) } > Wanna take quiz????? </button> */}
        </>
    )

}

export default CreateQuiz
