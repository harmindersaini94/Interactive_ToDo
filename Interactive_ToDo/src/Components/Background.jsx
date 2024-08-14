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
          className=" mt-2 text-3xl font-bold tracking-tight text-customPurple relative text-center"
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
