import React from 'react';
import { motion } from 'framer-motion';
import './quiz.css';

const QuizStartPage = ({ setGameState }) => {
  return (
    <div className="mpage">
      <h1>
        Grattis till att du är klar med spelet testa nu din förståelse med det här frågesporten
      </h1>
      <motion.button
        className="startBtn"
        onClick={() => {
          setGameState('quiz');
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        Starta frågesport
      </motion.button>
    </div>
  );
};

export default QuizStartPage;
