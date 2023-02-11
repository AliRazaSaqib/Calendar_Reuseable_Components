import "./App.css";
import Calandar from "./component/calandar/Calandar";

function App() {
  const onConfirm = (selected) => {
    console.log(selected);
  };

  const onCancel = (setSelected) => {
    setSelected();
  };

  return (
    <div className="App">
      {/* pass data with the help of props that can make this component reuseable */}
      <Calandar onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  );
}

export default App;
