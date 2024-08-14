import React, { useState, useId, useEffect, useRef } from "react";
import Typed from "typed.js";

const Background = ({ children }) => {
  const workRoles = useRef(null);
  useEffect(() => {
    const typed = new Typed(workRoles.current, {
      strings: [
        "INTERACTIVE TODO.",
        "RESPONSIVE TODO.",
        "ENGAGING TODO.",
        "MOVABLE TODO.",
      ],

      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
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
        <h3
          className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl shadow-md font-bold tracking-tight text-transparent mt-4 ml-4"
          ref={workRoles}
        >
          INTERACTIVE TODO
        </h3>
      </div>
      {children}
    </div>
  );
};

export default Background;
