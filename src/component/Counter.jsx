import useState from "@/hook/useState";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCounter = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else if (type === "minus" && count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => handleCounter("plus")}>+</button>
      <button onClick={() => handleCounter("minus")}>-</button>
      <button className="reset-button" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}
