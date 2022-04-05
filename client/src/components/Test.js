import React, { useState } from 'react';

function Test() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  localStorage.setItem('hello', 'hi')
  const cat = localStorage.getItem('hi')
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
      <p> This is {cat}   </p>
    </div>
  );
}



export default Test;