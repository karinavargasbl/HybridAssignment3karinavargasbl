import React, { useEffect, useState } from 'react';
import QuizHeader from './QuizHeader';
import QuizResults from './QuizResults';
import Question from './Question';

const API_URL =
  'https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple';

export default function Quiz({ onRestart }) {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const formatted = data.results.map((q, index) => {
          const answers = [...q.incorrect_answers, q.correct_answer];
          return {
            ...q,
            id: index,
            allAnswers: answers.sort(() => Math.random() - 0.5),
          };
        });
        setQuestions(formatted);
        setUserAnswers({});
        setSubmitted(false);
        setScore(0);
      });
  }, []);

  const handleSelect = (questionId, answer) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    let count = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correct_answer) count++;
    });
    setScore(count);
    setSubmitted(true);
  };

  if (questions.length === 0) return <p>Loading quiz...</p>;

  return (
    <div>
      <QuizHeader total={questions.length} />

      {!submitted ? (
        <>
          {questions.map(q => (
            <Question
              key={q.id}
              question={q}
              selected={userAnswers[q.id]}
              onSelect={answer => handleSelect(q.id, answer)}
              showCorrect={false}
            />
          ))}
          <button
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length < questions.length}
          >
            Submit Quiz
          </button>
        </>
      ) : (
        <QuizResults
          score={score}
          total={questions.length}
          questions={questions}
          userAnswers={userAnswers}
          onRetake={() => setSubmitted(false)}
          onNewQuiz={onRestart}
        />
      )}
    </div>
  );
}
