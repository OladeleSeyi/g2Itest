import "./App.css";
import Home from "./containers/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trivia from "./containers/Trivia";
import TriviaProvider from "./context/Trivia";
import Results from "./containers/Results";

function App() {
  return (
    <div className="App">
      <TriviaProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/trivia">
              <Trivia />
            </Route>

            <Route exact path="/results">
              <Results />
            </Route>
          </Switch>
        </Router>
      </TriviaProvider>
    </div>
  );
}

export default App;
