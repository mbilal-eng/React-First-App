import { questions } from "../data/questions";
const Button = ({ currentIndex, selectedAnswer, handleNextQuestion }) => {
  return (
    <button
      disabled={!selectedAnswer}
      className="bg-green-400 w-100 text-white p-2 rounded-lg m-2"
      onClick={() => {
        handleNextQuestion();
      }}
    >
      {currentIndex + 1 !== questions.length ? "Next" : "Finish"}
    </button>
  );
};
export default Button;
