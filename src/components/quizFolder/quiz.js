import { useState } from "react";
import "./quiz.css";

const QUESTIONS = [
  {
    id: 1,
    question: "koja je najveca planina na svetu",
    answers: ["kilimanjaro", "Kopaonik", "Fudzi", "Mont Everest", "k2"],
    correctAnswer: "Mont Everest",
    points: 5,
  },
  {
    id: 2,
    question: "koliko minuta traje fudbalska utakmica?",
    answers: ["10", "20", "30", "90"],
    correctAnswer: "30",
    points: 5,
  },
];

const QuizFunc = () => {
  let [counter, setCounter] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [totalAmount, setTotalAmount] = useState(0);

  const onClickFunc = (e) => {
    if (counter !== QUESTIONS.length - 1) {
      setCounter((prev) => prev + 1);
    } else {
      setCounter(0);
      setShowResult(true);
    }
    console.log(counter);
    if (e.target.value === QUESTIONS[counter].correctAnswer) {
      setTotalAmount(totalAmount + QUESTIONS[counter].points);
    }
  };

  if (counter === 2) {
    setShowResult = false;
  }

  return (
    <div className="main">
      {!showResult ? (
        <div className="mainCard">
          <ul>
            <li>
            <p>{QUESTIONS[counter].question}</p>
            </li>
            <li className="buttons">
            {QUESTIONS[counter].answers.map((answer) => (
              <button value={answer} onClick={onClickFunc}>
                {answer}
              </button>
            ))}
            </li>
          </ul>
        </div>
      ) : (
        <div>
        <h1 className="congrats">cestitamo uradili ste kviz, imali ste: {totalAmount} poena</h1>
        </div>
      )}
    </div>
  );
};

export default QuizFunc;
