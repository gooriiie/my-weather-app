import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About.jsx"
import Cities from "./pages/Cities.jsx"
import Home from "./pages/Home.jsx"

function App() {
  const city = "Daejeon";

  return (
  <Router>
    <div className="App">
      <Header region="KR" cityName={city} />

      <ul className="navigation">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/cities">Cities</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/cities">
            <Cities />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>


    </div>
  </Router>
  );
}

export default App;
