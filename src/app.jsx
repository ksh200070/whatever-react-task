function App() {
  const handleButton = () => {
    console.log("버튼");
  };
  return (
    <div id="App">
      <span>설명</span>
      <button className="add-button" onClick={handleButton}>
        버튼
      </button>
    </div>
  );
}

export default App;
