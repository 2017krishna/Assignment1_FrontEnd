'use client';

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // State variable to hold the count value

  const increment = () => { // Function to increment the count
    setCount(count + 1);
  };

  const decrement = () => { // Function to decrement the count
    setCount(count - 1);
  };

  return (
    <div className="component-section"> 
      <h2>Counter Component</h2>
      <p>Current Count: {count}</p> {/* Display the current count */}
      <button onClick={increment}>Increment</button> {/* Button to increment the count */}
      <button onClick={decrement}>Decrement</button> {/* Button to decrement the count */}
    </div>
  );
}