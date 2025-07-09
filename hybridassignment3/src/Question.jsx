import React from 'react';

export default function Question({ question, selected, onSelect, showCorrect }) {
  return (
    <div className="question-block">
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />

      {question.allAnswers.map((answer, index) => {
        const isCorrect = answer === question.correct_answer;
        const isSelected = selected === answer;

        let className = 'option';
        if (showCorrect) {
          className += isCorrect ? ' correct' : isSelected ? ' incorrect' : '';
        } else if (isSelected) {
          className += ' selected';
        }

        return (
          <button
            key={index}
            className={className}
            onClick={() => onSelect(answer)}
            disabled={showCorrect}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        );
      })}
    </div>
  );
}
