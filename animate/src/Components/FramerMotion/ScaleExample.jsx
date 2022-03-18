import React from 'react';
import {motion} from "framer-motion";

function ScaleExample() {
  return (
      <div>
        <motion.div
            style={{backgroundColor: "pink", width: 10, height: 10}}
            animate={{ scale: 20 }}
            transition={{ duration: 1 }}
        />
      </div>
  );
}

export default ScaleExample;