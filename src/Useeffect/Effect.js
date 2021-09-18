import { useState, useEffect } from "react";
import "./Effect.css";

export default function Index() {
  // Use Effect Pertama
  const [countA, setCountA] = useState(0);
  const tick = () => {
    setCountA(countA + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [countA]);

  // Use Effect Kedua
  const [countb, setCountB] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect - Updating document title ");
    document.title = `${name} - You clicked ${countb} times`;
  }, [countb]);

  return (
    <div className="countainer">
      {/* useEffect - Interval Counter */}
      <div className="divPadding">
        <h1>UseEffect Counter Interval</h1>
        <div className="countValue">{countA}</div>
      </div>

      {/* useEffect - Counter Kedua */}
      <div className="divPadding">
        <h1>UseEffect Update Title</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="Button" onClick={() => setCountB(countb + 1)}>
          useEffect - Click {countb} times
        </button>
      </div>
    </div>
  );
}
