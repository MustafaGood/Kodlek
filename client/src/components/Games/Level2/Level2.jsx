import React from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas, CodeView, Commands } from '../../Elements';
import Answer from '../../../Data/Data';
import { QuestionsList } from '../../../Data/Data';
import '../style.css';
import {
  colorAction,
  colorTypeAction,
  resetCode,
  moveAction,
  turnAction,
  dropAction,
  modalOff,
  modalOn,
} from '../../../state/actionSlice';
import { selectEngineOutput } from '../../../state/actionSlice';
import { motion } from 'framer-motion';

function Level2() {
  const dispatch = useDispatch();
  const EngineOutput = useSelector(selectEngineOutput);
  const GameAnswer = Answer.level2;

  const navigate = useNavigate();
  const correct = useSelector((state) => state.action.modal);
  function checkAnswer(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].name !== arr2[i].name || arr1[i].value !== arr2[i].value) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  if (checkAnswer(EngineOutput, GameAnswer)) {
    dispatch(modalOn());
  }
  const handleExit = () => {
    dispatch(resetCode());
    navigate('/main');
  };
  const handleColor = () => {
    dispatch(colorAction());
  };
  const handleColorType = (text) => {
    dispatch(colorTypeAction(text));
  };

  const handleMovementType = () => {
    dispatch(moveAction());
  };
  const handleTurnType = () => {
    dispatch(turnAction());
  };
  const handleDropType = () => {
    dispatch(dropAction());
  };
  const handleModal = () => {
    dispatch(resetCode());
    dispatch(modalOff());
    navigate('/quiz', { state: { data: QuestionsList.quiz2, level: 3 } });
  };
  return (
    <div className="game-page-container">
      <div className="exit">
        <div className="exitbtn" onClick={handleExit}>
          <HiOutlineChevronLeft />
        </div>
      </div>
      <div className="Buttons-Codespace--Actions">
        <div className="Buttons-Codespace">
          <CodeView />
          <Commands />
        </div>
        <div className="actions-sm-size">
        <button type="button" onClick={() => handleColor()}>
            Färg()
          </button>
          <button type="button" onClick={() => handleColorType('red')}>
            röd
          </button>
          <button type="button" onClick={() => handleColorType('green')}>
            Grön
          </button>
          <button type="button" onClick={() => handleColorType('yellow')}>
            gul
          </button>
          <button type="button" onClick={() => handleMovementType()}>
            flytta
          </button>
          <button type="button" onClick={() => handleTurnType()}>
          sväng vänster
          </button>
          <button type="button" onClick={() => handleDropType()}>
            dropBox
          </button>
        </div>
      </div>
      <div className="canvasout">
        <Canvas EngineOutput={EngineOutput} GameAnswer={EngineOutput} />
        <Canvas EngineOutput={GameAnswer} GameAnswer={GameAnswer} />
      </div>
      {correct && (
        <div className="modal">
          <div className="modal-container">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 140 }}
            >
              {' '}
              Grattis, du har avslutat den här nivån.
            </motion.h2>
            <motion.button
              className="modalBtn"
              onClick={() => handleModal()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
            >
              ta frågesport
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Level2;
