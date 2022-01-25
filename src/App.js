
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
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import Contact from "./Contactpage";

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" exact element={<Frontpage/>} />
                <Route path="/projects" element={<Projectpage/>} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/contactMe"} element={<Contact />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
