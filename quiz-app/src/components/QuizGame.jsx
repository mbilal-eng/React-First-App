import React from "react";
import Button from "./Button";

const QuizGame = ({
  currentIndex,
  currentQuestion,
  selectedAnswer,
  handleNextQuestion,
  handleSelectOption,
}) => {
  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((ans, index) => {
        let bgColor = "";

        if (selectedAnswer === ans) {
          if (ans === currentQuestion.correctAnswer) {
            bgColor = "bg-green-300";
          } else if (ans === selectedAnswer) {
            bgColor = "bg-red-300";
          }
        }

        return (
          <div
            key={index}
            onClick={() => handleSelectOption(ans)}
            className={`border-2 border-black ${bgColor} rounded-lg w-100 m-1 p-2 text-center cursor-pointer`}
          >
            <h3>{ans}</h3>
          </div>
        );
      })}
      <Button
        currentIndex={currentIndex}
        selectedAnswer={selectedAnswer}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default QuizGame;
