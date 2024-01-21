import React, { useEffect, useState } from 'react';

const FlipScroll = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (value !== currentValue) {
      setAnimation(true);
      setTimeout(() => {
        setCurrentValue(value);
        setAnimation(false);
      }, 300); // Duration of the flip animation
    }
  }, [value, currentValue]);

  return (
    <div className={`relative inline-block ${animation ? 'animate-flip' : ''}`}>
      {currentValue}
    </div>
  );
};

export default FlipScroll;
