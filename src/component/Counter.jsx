import { useState } from "@/hook/useState";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCounter = (num, type) => {
    if (num === 1) {
      type === "plus"
        ? setCount1((prev) => prev + 1)
        : setCount1((prev) => prev - 1);
    } else {
      type === "plus"
        ? setCount2((prev) => prev + 1)
        : setCount2((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <div>
      <button className="reset-button" onClick={handleReset}>
        reset
      </button>
      <h2>{count1}</h2>
      <button onClick={() => handleCounter(1, "plus")}>+</button>
      <button onClick={() => handleCounter(1, "minus")}>-</button>
      <h2>{count2}</h2>
      <button onClick={() => handleCounter(2, "plus")}>+</button>
      <button onClick={() => handleCounter(2, "minus")}>-</button>
    </div>
  );
}
