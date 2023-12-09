import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  const handleAddOne = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <Count count={count} />
      <Button onAddOne={handleAddOne} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
