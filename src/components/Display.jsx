import React from 'react';

const Display = (props = 0) => {
  const result = props.toString();

  return (
    <div className="result">
      {result}
    </div>
  );
};

export default Display;
