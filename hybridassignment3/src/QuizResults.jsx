import React from 'react';

export default function QuizResults({ score, total, questions, userAnswers, onRetake, onNewQuiz }) {
  return (
    <div className="results">
      <h2>Your Score: {score} / {total}</h2>

      {questions.map((q, index) => (
        <div key={index} className="result-question">
          <h4 dangerouslySetInnerHTML={{ __html: q.question }} />
          <p>
  Your answer:{' '}
  <span
    className={
      userAnswers[q.id] === q.correct_answer ? 'correct' : 'incorrect'
    }
    dangerouslySetInnerHTML={{ __html: userAnswers[q.id] }}
  />
  {userAnswers[q.id] === q.correct_answer ? (
    <span style={{ color: 'green', marginLeft: '8px' }}>✅</span>
  ) : (
    <span style={{ color: 'red', marginLeft: '8px' }}>❌</span>
  )}
</p>

          {userAnswers[q.id] !== q.correct_answer && (
            <p>
              Correct answer:{' '}
              <span
                className="correct"
                dangerouslySetInnerHTML={{ __html: q.correct_answer }}
              />
            </p>
          )}
        </div>
      ))}
<div className="button-group">
        <button onClick={onRetake}>Retake Quiz</button>
        <button onClick={onNewQuiz}>New Quiz</button>
      </div>
</div>
);
}



