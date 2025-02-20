import React from 'react';
import './Home.css';
import NavBar from '../Elements/navbar/NavBar';
import bot from '../../assets/bot.svg';
import redbot from '../../assets/redbot.png';
import greenbot from '../../assets/greenbot.png';
import yellowbot from '../../assets/yellowbot.png';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="main">
      <NavBar />
      <div className="mainHome">
        <h1>Kodlek</h1>
        <motion.img
          src={bot}
          alt="bot"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 140 }}
        />
      </div>
      <div className="foot">
        <div className="line"></div>
        <p>spel</p>
        <div className="line"></div>
      </div>
      <div className="redbot">
        <p>Röd Bot</p>
        <img src={redbot} alt="redbot" />
      </div>
      <div className="greenbot">
        <p>Grön Bot</p>
        <img src={greenbot} alt="greenbot" />
      </div>
      <div className="yellowbot">
        <p>Gul Bot</p>
        <img src={yellowbot} alt="yellowbot" />
      </div>
    </div>
  );
}

export default Home;
