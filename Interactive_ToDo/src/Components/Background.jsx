import React, {useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Background = ({ children }) => {
  const workRoles = useRef(null);
  useEffect(() => {
    const typed = new Typed(workRoles.current, {
      strings: ["INTERACTIVE TODO.", "RESPONSIVE TODO.", "ENGAGING TODO."],

      startDelay: 50,
      typeSpeed: 30,
      backSpeed: 40,
      backDelay: 30,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-black">
        <motion.h3
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=" mt-2 text-3xl font-bold tracking-tight text-customTan relative text-center"
          ref={workRoles}
        >
          INTERACTIVE TODO
        </motion.h3>
      </div>
      {children}
    </div>
  );
};

export default Background;
