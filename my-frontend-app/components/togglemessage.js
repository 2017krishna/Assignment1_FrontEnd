'use client';

import React, { useState } from 'react';

export default function ToggleMessage() { // ToggleMessage component
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return ( 
    <div className="component-section"> 
      <h2>Toggle Message Component</h2>
      <button onClick={toggleVisibility}> {/* Button to toggle visibility */}
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {isVisible && <p>This message is conditionally rendered! You made it appear!</p>} {/* Conditional rendering of the message */}
    </div>
  );
}