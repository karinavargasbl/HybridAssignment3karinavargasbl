import React from 'react';

export default function QuizHeader({ total }) {
  return (
    <header className="quiz-header">
      <h1>🎵 Music Trivia Quiz</h1>
      <p>You will answer {total} multiple-choice questions.</p>
    </header>
  );
}
