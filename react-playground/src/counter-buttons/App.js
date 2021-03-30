import React from 'react';
import Counter from './Counter';
import './main.css';

function App() {
  return (
    <div className='counter-wrap'>
      <Counter 
        decrementBy={1} 
        incrementBy={1} 
      />
      <Counter 
        decrementBy={2} 
        incrementBy={2} 
      />
      <Counter 
        decrementBy={5} 
        incrementBy={5} 
      />
      <Counter 
        decrementBy={10} 
        incrementBy={10} 
      />
    </div>
  );
}

export default App;