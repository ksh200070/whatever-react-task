import { useState } from "@/hook/useState";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleReset = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <section id="counter">
      <h1>Counter</h1>
      <button className="reset-button" onClick={handleReset}>
        reset
      </button>
      <h2>{count1}</h2>
      <button onClick={() => setCount1((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount1((prev) => prev - 1)}>-</button>
      <h2>{count2}</h2>
      <button onClick={() => setCount2((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount2((prev) => prev - 1)}>-</button>
    </section>
  );
}
