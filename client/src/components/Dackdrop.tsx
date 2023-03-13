import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { stateLogger } from '../../stateLogger';

const Backdrop = ({ children, className, onClick }: any) => {
  // * Log state
  useEffect(() => {
    stateLogger('Backdrop', true);
    return () => stateLogger('Backdrop', false);
  }, []);

  return (
    <motion.div
      className={`backdrop ${className}`}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
