import React, { useState } from 'react';
import { render } from 'react-dom';
import './App.css';

export default function App() {
  const [back, setBack] = useState(false);
  const onChangeSide = () => {
    setTimeout(() => {
      document.querySelector('.card').classList.add('card-flip');
      setTimeout(() => {
        document.querySelector('.card').classList.remove('card-flip');
        setBack(!back);
      }, 500);
    }, 1000);
  };
  return (
    <div>
      <div className="card" onClick={onChangeSide}>
        {back ? 'back' : 'front'}
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
