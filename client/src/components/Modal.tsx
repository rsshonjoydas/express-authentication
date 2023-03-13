'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { stateLogger } from '../../stateLogger';
import Backdrop from './Dackdrop';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: 'scale(0) rotateX(-360deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1) rotateX(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotateX(360deg)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const newspaper = {
  hidden: {
    transform: 'scale(0) rotate(720deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1) rotate(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotate(-720deg)',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const badSuspension = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transform: 'scale(0) rotateX(-360deg)',
  },
  visible: {
    y: '-25vh',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

const drawer = {
  hidden: {
    x: '-100vh',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: '100vh',
    opacity: 0,
    transition: { duration: 1 },
  },
};

const Modal = ({ handleClose, children, type, className }: any) => {
  // * Log state
  useEffect(() => {
    stateLogger('Modal', true);
    return () => stateLogger('Modal', false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      {type === 'dropIn' && (
        <motion.div
          onClick={(e: any) => e.stopPropagation()} // Prevent click from closing modal
          className={`modal ${className}`}
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.9}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <div>{children}</div>
        </motion.div>
      )}

      {type === 'flip' && (
        <motion.div
          onClick={(e: any) => e.stopPropagation()}
          className={`modal ${className}`}
          variants={flip}
          initial='hidden'
          animate='visible'
          exit='exit'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.9}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <div>{children}</div>
        </motion.div>
      )}

      {type === 'newspaper' && (
        <motion.div
          onClick={(e: any) => e.stopPropagation()}
          className={`modal ${className}`}
          variants={newspaper}
          initial='hidden'
          animate='visible'
          exit='exit'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.9}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <div>{children}</div>
        </motion.div>
      )}

      {type === 'badSuspension' && (
        <motion.div
          onClick={(e: any) => e.stopPropagation()}
          className={`modal ${className}`}
          variants={badSuspension}
          initial='hidden'
          animate='visible'
          exit='exit'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.9}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <div>{children}</div>
        </motion.div>
      )}

      {type === 'gifYouUp' && (
        <motion.div
          className='modal'
          onClick={(e: any) => e.stopPropagation()}
          style={{
            padding: 0,
            height: 'auto',
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
          variants={gifYouUp}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <h3
            style={{
              color: '#ffaa00',
              textTransform: 'none',
              fontWeight: 400,
              margin: 'auto auto auto 0',
              fontFamily: 'Montserrat',
              fontSize: '150%',
            }}
          >
            Tap x2 to close
          </h3>
          <motion.img
            alt=''
            onDoubleClick={handleClose}
            drag
            // src="https://i.giphy.com/media/O5ac76MtFGPHG/giphy.gif"
            // src="https://i.giphy.com/media/jmS6YojdAaYw5z1LHi/giphy.gif"
            src='https://i.giphy.com/media/hhgAbqQpm49vW/giphy.gif'
            style={{
              margin: '0 auto auto auto',
              maxHeight: '40vh',
              height: '40vh',
              width: 'auto',
              objectFit: 'cover',
              borderRadius: '6px',
              zIndex: 1000,
            }}
          />
        </motion.div>
      )}

      {type === 'drawer' && (
        <motion.div
          onClick={(e: any) => e.stopPropagation()} // Prevent click from closing modal
          className={`drawer ${className}`}
          variants={drawer}
          initial='hidden'
          animate='visible'
          exit='exit'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.9}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <div>{children}</div>
        </motion.div>
      )}
    </Backdrop>
  );
};

export default Modal;
