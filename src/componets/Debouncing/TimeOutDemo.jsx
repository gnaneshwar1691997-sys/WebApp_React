import React, { useState, useRef } from "react";

const TimeOutDemo = () => {
  const [cAccessState, setAccessState] = useState("No Access");
  const userCategory = "Contractor";
  const LevelFinalAccessRef = useRef(null);

  function handleAccess() {
    // Schedule access levels
    setTimeout(LevelOneAccess, 1000);
    setTimeout(LevelTwoAccess, 2000);
    setTimeout(LevelThreeAccess, 3000);
    LevelFinalAccessRef.current = setTimeout(LevelFourAccess, 4000);

    function LevelOneAccess() {
      setAccessState("First Level of Access Granted");
    }

    function LevelTwoAccess() {
      setAccessState("Second Level of Access Granted");
    }

    function LevelThreeAccess() {
      if (userCategory === "Admin") {
        setAccessState("Third Level of Access Granted");
      } else {
        setAccessState(
          "You are not allowed to access this level. Contact Admin."
        );
        clearTimeout(LevelFinalAccessRef.current); // stop next level
      }
    }

    function LevelFourAccess() {
      setAccessState("You have complete access to the building now.");
    }
  }

  return (
    <>
      <div>Hello</div>
      <p>Current State Access is: {cAccessState}</p>
      <button onClick={handleAccess}>Give Building Access</button>
    </>
  );
};

export default TimeOutDemo;
