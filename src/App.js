
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Frontpage from "./Frontpage";
import Projectpage from "./Projectpage";
import Header from "./partials/Header";

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" exact element=<Frontpage/> />
                <Route path="/projects" element=<Projectpage/> />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
