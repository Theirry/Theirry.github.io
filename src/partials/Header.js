
import "./Header.css";
import logoimg from '../images/portfolio logo.png';
import React, {useState} from 'react';
import {
    Routes,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import Projects from "../Projectpage";
import Frontpage from "../Frontpage";

// const Projects = () => <Projects />
export default function Header(){
    const [state, setState] = useState(0);
    return(
        <div className="headdiv">
            <nav className="navibar">
                <figure className="navlogo">
                    <img className="navlogoimage" src={logoimg} alt="Conpanny logo"/>
                </figure>
                    <BrowserRouter>
                        <div className="" id="navbarNav">
                            <ul className="navbarnav">
                                <li className="navitem">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="navitem">
                                   <Link to="/projects">Projects</Link>
                                </li>
                                {/*<li className="navitem">*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <Routes>
                            <Route path="/" component=<Frontpage /> />
                            <Route path="/projects" component={ShowProjects}/>
                        </Routes>
                    </BrowserRouter>
                        {/*<NavLink className="navbar-item" activeClassName="is-active" to="/">*/}
                        {/*    Home*/}
                        {/*</NavLink>*/}
                        {/*<NavLink className={"navbar-item"} activeClassName={"is-active"} to={"/projectpage"}>*/}
                        {/*    Projects*/}
                        {/*</NavLink>*/}
                        {/*<NavLink className={"navbar-item"} activeClassName={"is-active"} to={"/downloadpage"}>*/}
                        {/*    Downloads*/}
                        {/*</NavLink>*/}
            </nav>
            <h1 className="h1" style={{color: "white"}}>Welcome To My Portfolio</h1>
        </div>
    )
}

function ShowProjects(){
                return(< Projects />)
}