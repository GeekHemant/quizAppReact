import React from "react";

function Progress({ current, total }) {
  return (
    <div>
      <p>
        question {current + 1 } of {total}
      </p>
    </div>
  );
}

export default Progress;
