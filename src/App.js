import { useState } from "react";

const reactQuestionsAndAnswers = [
  {
    id: 101,
    question: "What is React.js?",
    answer: "A popular JavaScript library for building user interfaces.",
  },
  {
    id: 102,
    question: "What is JSX?",
    answer: "An extension to JavaScript for writing HTML-like code in React.",
  },
  {
    id: 103,
    question: "What are React components?",
    answer: "Reusable building blocks for UI logic and rendering.",
  },
  {
    id: 104,
    question: "What is the virtual DOM?",
    answer: "In-memory representation of the actual DOM used by React.",
  },
  {
    id: 105,
    question: "What is state in React?",
    answer: "An object holding component-specific data.",
  },
  {
    id: 106,
    question: "What are React hooks?",
    answer:
      "Functions for managing state and side effects in functional components.",
  },
];

export default function App() {
  return (
    <div className="grid-container">
      <DisplayCard />
    </div>
  );
}

function DisplayCard() {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return reactQuestionsAndAnswers.map((question) => (
    <div
      className={selectedId === question.id ? "grid-item-a" : "grid-item-q"}
      onClick={() => handleClick(question.id)}
      key={question.id}
    >
      <p>{question.id === selectedId ? question.answer : question.question}</p>
    </div>
  ));
}
