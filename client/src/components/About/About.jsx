import React from 'react';
import NavBar from '../Elements/navbar/NavBar';
import bot from '../../assets/bot.svg';
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div className="about_main">
      <NavBar />
      <div className="about_container">
        <div className="about_text">
          <h1>Kodlek</h1>
          <hr />
          <p>
          Välkommen till Kodlek, en banbrytande utbildningsplattform dedikerad till att stärka nästa generations teknikentusiaster. Vårt uppdrag är att överbrygga den digitala klyftan genom att ge unga elever en engagerande och interaktiv upplevelse som introducerar dem till programmeringsvärlden. Genom vårt innovativa spelbaserade tillvägagångssätt strävar vi efter att inspirera och utrusta eleverna med de färdigheter och kunskaper som krävs för att utmärka sig i det snabbt föränderliga tekniska landskapet.
          </p>
        </div>
        <motion.div
          className="bot_image"
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.4,
            duration: 2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <img src={bot} alt="bot" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
