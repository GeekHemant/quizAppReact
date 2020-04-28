import React, { useState } from 'react'
import Answer from './answer'

function Options({ option, increaseMarks }) {
    
    return (
        <div>
            <Answer ans={ option.ans_1 } onclick={() => increaseMarks(1) } />
            <Answer ans={ option.ans_2 } onclick={() => increaseMarks(2) } />
            <Answer ans={ option.ans_3 } onclick={() => increaseMarks(3) } />
            <Answer ans={ option.ans_4 } onclick={() => increaseMarks(4) } />
        </div>
    )
}

export default Options
