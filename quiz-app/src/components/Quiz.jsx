import React, { useState } from "react";
import { questions } from "../data/questions";
import QuizGame from "./QuizGame";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (option) => {
    if (!selectedAnswer) {
      // console.log(selectedAnswer);
      setSelectedAnswer(option);
      if (option === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 !== questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const result = () => {
    if (showResult) {
      return (
        <div>
          <h1>
            Your Score is {score} out of {questions.length}
          </h1>
          <button
            className="bg-green-400 w-100 text-white p-2 rounded-lg m-2"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center m-5 h-[90vh]">
      <div className="w-2xl min-h-16 bg-white shadow-gray-400 shadow-2xl rounded-4xl p-4 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4">Quiz App</h1>

        {showResult ? (
          result()
        ) : (
          <QuizGame
            currentIndex={currentIndex}
            currentQuestion={currentQuestion}
            selectedAnswer={selectedAnswer}
            handleNextQuestion={handleNextQuestion}
            handleSelectOption={handleSelectOption}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
