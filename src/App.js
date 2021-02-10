import "./styles.css";
import Navigation from "./components/UI/Navigation";
import { BrowserRouter as Router ,Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/profile";
export default function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path ="/login" component={Login}/>
          <Route path ="/profile/:id" component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}
