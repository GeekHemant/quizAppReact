import React from 'react'

function Answer({ ans, onclick }) {
    return (
        <div>
            <button onClick={onclick} > { ans } </button>
        </div>
    )
}

export default Answer
