import "./App.css";
import Calandar from "./component/calandar/Calandar";

function App() {
  const onConfirm = (selected) => {
    // onConfirm get the selected date here...
    console.log(selected);
  };

  const onCancel = (setSelected) => {
    // onCancel reset the selected dayPikcer input field...
    setSelected(null);
  };

  return (
    <div className="App">
      {/* pass data with the help of props that can make this component reuseable */}
      <Calandar onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  );
}

export default App;
