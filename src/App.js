import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
