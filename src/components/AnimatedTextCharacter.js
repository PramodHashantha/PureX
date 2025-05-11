import React, { useRef} from 'react';
import { motion,useInView } from "framer-motion";




const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.1 * i },
    }),
  };
  const ref = useRef(null);

  const isInView = useInView(ref, {amount: 1 , once:true }) ;


  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 30,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className='anime'>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;