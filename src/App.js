import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/payment">Payment</Link>
                </li>
                <li>
                  <Link to="/confirmation">Confirmation</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Route path="/" exact component={Home} />
              <Route path="/payment" component={Payment} />
              <Route path="/confirmation" component={Confirmation} />
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
