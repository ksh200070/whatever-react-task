import { useState } from "@/hook/useState";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleList = () => {
    setList((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <section id="todo-list">
        <h1>To do list</h1>
        <input
          type="text"
          placeholder="할일을 작성해주세요"
          value={inputValue}
          onChange={(event) => setInputValue(() => event.target.value)}
        />
        <button onClick={handleList}>할일추가</button>
        {!!list.length && list.map((task) => <div>{task}</div>)}
      </section>
    </div>
  );
}
