import React, { useRef, useEffect, useState } from "react";

const DemoUseRefHook = () => {
  // 🔹 1. Ref for input element (focus control)
  const inputRef = useRef(null);

  // 🔹 2. Ref for previous count value
  const countPrevRef = useRef(0);

  // 🔹 3. Ref for render tracking
  const renderTrack = useRef(0);

  // 🔹 State variable for count
  const [count, setCount] = useState(0);

  // 🔹 useEffect to update previous count & render count
  useEffect(() => {
    renderTrack.current += 1; // Increment render count

    console.log("Component re-rendered");
    countPrevRef.current = count; // Store current count for next render
  }, [count]);

  // 🔹 Handler to focus input box
  const handleBtnClick = () => {
    console.log("Focus button clicked");
    inputRef.current.focus();
  };

  return (
    <div className="container mt-4" style={{ fontFamily: "Arial" }}>
      <h2 style={{ color: "blue" }}>useRef Hook Demo</h2>

      {/* Input and focus button */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter something..."
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleBtnClick}>Get Focus</button>

      <hr />

      {/* Render details */}
      <b>
        The component has rendered <span style={{ color: "green" }}>{renderTrack.current}</span>{" "}
        times.
      </b>
      <p>Previous Count Value → {countPrevRef.current}</p>
      <p>Current Count Value → {count}</p>

      {/* Increment button */}
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "orange",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default DemoUseRefHook;
