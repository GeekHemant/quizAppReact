import React, { useContext } from "react";
import { HandleContext } from './mainPage'


function Progress({current}) {

  const context = useContext(HandleContext)

  return (
    <div>
      <h5>
        Question { context.quiz.current + 1 } of { context.quiz.paper.length}
      </h5>
    </div>
  );
}

export default Progress;
