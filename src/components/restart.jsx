import React, { useContext } from 'react'
import { HandleContext } from './mainPage'


function Restart() {
    const context = useContext(HandleContext)
    
    return (
        <div>
            <button onClick={ () => context.dispatch({ type: "restart" }) } className="next" > Restart </button>
        </div>
    )
}

export default Restart
