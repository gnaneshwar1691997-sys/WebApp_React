import { useState, useEffect, useRef } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log("✅ useEffect called");

    // Clear any existing interval before creating a new one
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      console.log("⏱ Interval called");
      setCount((prevCount) => prevCount + 1); // Safe update
    }, 1000);

    return () => {
      console.log("🧹 Cleanup called");
      clearInterval(intervalRef.current);
    };
  }, [count]); // Re-runs whenever count changes

  return (
    <>
      <div>Count - {count}</div>
      <b>From useEffect demo comp</b>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div className="addsBlock">Adds block - {count}</div>
    </>
  );
}

export default DemoUseEffect;
