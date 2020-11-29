import React, { useState } from "react";

const MyComponent = ({ onIncrement, start }) => {

  onIncrement = onIncrement || function () { };

  const [count, setCount] = useState(start || 0);
  const spanStyle = { color: 'red', fontSize: '26px', display: 'block' };

  const increment = () => setCount(count + 1) & onIncrement(count + 1);
  const decrement = () => setCount(count - 1) & onIncrement(count - 1);

  return (
    <div className="my-component">
      <span style={spanStyle}>
        {count}
      </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default MyComponent;
