import React from 'react';

function Counter(props) {
  const [count, setCount] = React.useState(0);
  
  const decrement = () => {
    setCount(count - props.decrementBy);
  }
  
  const increment = () => {
    setCount(count + props.incrementBy);
  }
  
  return (
    <div className='counter'>
      <div className='num'>{count}</div>
      <div className='btn-wrap'>
        <button 
          className='decrement-btn'
          onClick={decrement}
        >
          −{props.decrementBy}
        </button>
        <button 
          className='increment-btn'
          onClick={increment}
        >
          +{props.incrementBy}
        </button>
      </div>  
    </div>
  );
}

export default Counter;