import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import './css/app.css';
import './css/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />


        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
      </div>
    </Router>
);
}

export default App;

// Photo by Ferdinand Stöhr on Unsplash