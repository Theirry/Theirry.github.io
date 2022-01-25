
import "./Header.css";
import logoimg from '../images/portfolio logo.png';
import React, {useState} from 'react';
import { Link }from 'react-router-dom'
import {FaHome, FaRaspberryPi} from "react-icons/fa";


export default function Header(){
    const [state, setState] = useState(0);
    return(
        <div className="headdiv">
            <nav className="navibar">
                <figure className="navlogo">
                    <img className="navlogoimage" src={logoimg} alt="Conpanny logo"/>
                </figure>
                <ul className="navibar">
                    <li className={"navitem"}>
                        <Link className={"navlink"} to="/"> <FaHome style={{marginRight: '10px', marginBottom: '5'}}/> Home</Link>
                    </li>
                    <li className={"navitem"}>
                        <Link className={"navlink"} to="/projects"> <FaRaspberryPi style={{marginRight: '10px', marginBottom: '5'}}/> Projects</Link>
                    </li>
                </ul>
            </nav>
            <h1 className="h1" style={{color: "white"}}>Welcome To My Portfolio</h1>
        </div>
    )
}
