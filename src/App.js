import "./styles.css";
import Navigation from "./components/UI/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/profile";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
