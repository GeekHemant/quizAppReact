import React from 'react'

function Result({ marks, totalQuestion }) {
    return (
        <div>
            You have scored { marks } out of { totalQuestion }
        </div>
    )
}

export default Result
