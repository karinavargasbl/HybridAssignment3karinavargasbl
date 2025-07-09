import React, { useState } from 'react';
import Quiz from './Quiz';

export default function App() {
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey(prev => prev + 1);
  };

  return (
    <div className="app">
      <Quiz key={restartKey} onRestart={handleRestart} />
    </div>
  );
}

