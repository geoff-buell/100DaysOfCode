import React from 'react';

function Button(props) {
  
  const handleClick = (e) => {
    if (e.target.nodeName === 'I') {
      e.target.parentNode.style.display = 'none';
    } else {
      e.target.style.display = 'none';
    }
  }
  
  return (
    <div className='btn-wrap'>
      <span className='emoji'>{props.emoji}</span>
      <button 
        onClick={handleClick}
        className='btn'
      >
        👆
      </button>
    </div>
  );  
}

export default Button;