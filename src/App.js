import "./App.css";
import TriviaProvider from "./context/Trivia";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <TriviaProvider>
        <Routes />
      </TriviaProvider>
    </div>
  );
}

export default App;
