import React from 'react';
import Button from './Button';
import './button-reveal.css';

function App() {
  
  const emojis = [
    '🤡', '🥸', '🤖', '👽', 
    '👹', '🎃', '💩', '💀', 
    '🐸', '🐵', '🐱', '🐶'
  ];
  
  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  return (
    <div>
      <h1>Button Reveal</h1>
      <div className='container'>
        <Button emoji={getRandomEmoji()} />
        <Button emoji={getRandomEmoji()} />
        <Button emoji={getRandomEmoji()} />
        <Button emoji={getRandomEmoji()} />
        <Button emoji={getRandomEmoji()} />
        <Button emoji={getRandomEmoji()} />
        <Button emoji={getRandomEmoji()} />
        <Button emoji={getRandomEmoji()} />
      </div>
    </div>  
  );
}

export default App;