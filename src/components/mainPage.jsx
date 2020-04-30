import React, { useReducer, useState } from 'react'
import HomeQuiz from './homeQuiz'
import CreateQuiz from './createQuiz'
import './StyleSheet.css'

export const HandleContext = React.createContext()

const initialState = {
    paper: [
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
    ],
    current: 0,
    marks: 0,
    showResult: false,
    userInput: ''
}

const reducer = (state, action) => {
    switch( action.type ) {
        case "correct": return {
            ...state,
            marks: state.marks + 1,
            current: state.current + 1,
        }
        case "wrong": return {
            ...state,
            current: state.current + 1
        }
        case "restart": return {
            ...state,
            current: 0,
            marks: 0,
            showResult: false
        }
        case "addQuestion": return {
            ...state,
            paper: [
                ...state.paper,
                {
                    id: action.id,
                    que: action.question,
                    ans_1: action.option1,
                    ans_2: action.option2,
                    ans_3: action.option3,
                    ans_4: action.option4,
                    right: action.correctOption
                }
            ]
        }
        case "setCreatePage": return {
            ...state,
            userInput: <CreateQuiz />
        }
        case "setQuizPage": return {
            ...state,
            userInput: <HomeQuiz />
        }
        case "setDefaultPage": return {
            ...state,
            userInput: ''
        }

        default:
            return state
    }
}

function MainPage() {

    const [quiz, dispatch] = useReducer(reducer, initialState)
    // const [userInput, setUserInput] = useState('')
    // const {paper, current, marks, showResult } = quiz
    
    const handleQuiz = selected => {
        if( selected === "create" ) {
            dispatch({ type: "setCreatePage" })
        } else {
            dispatch({ type: "setQuizPage" })
        }
    }

    if(quiz.userInput) {
        return (
            <HandleContext.Provider value={{ quiz, dispatch }} >
                <>
                    { quiz.userInput }
                </>
            </HandleContext.Provider>
        )
    }

    return (
        <HandleContext.Provider value={{ quiz, dispatch }}  >
            <>
                <button className="main" onClick={ () => handleQuiz("create") } > Wanna create quiz ?? </button>
                <button className="main" onClick={ () => handleQuiz("test") } > Wanna give a test ?? </button>
                {/* {userInput} */}
                {/* <HomeQuiz /> */}
            </>
        </HandleContext.Provider>
    )
}

export default MainPage
