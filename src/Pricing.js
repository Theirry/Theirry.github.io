
import React, {useRef, useState} from 'react';
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdEuro} from "react-icons/md"
import  {Button, Card}  from 'react-bootstrap';
import "./Pricing.css" //I am stupid

// Freelance front-end dev: https://sanderlangendoen.nl/tarieven-freelance-frontend-ontwikkelaar/
//https://www.nationaleberoepengids.nl/android-developer#:~:text=Een%20Android%20Developer%20kan%20rekenen,van%20zijn%20leeftijd%20en%20ervaring.




const cardArray = [["Web front-end", 40, 60, false], ["Web back-end", 0, 0, true], ["Android application backend", 17, 25, false]];

function makeCards(){
    return cardArray.map((el, i) =>
        <li id={`${i}listItem`}>
            <Card className={"pricerange"} id={`pricerange${i}`}>
                <Card.Title className={"class-title ct"}>{cardArray[i][0]}</Card.Title>
                <h4>{<MdEuro/>}{cardArray[i][1]} - {<MdEuro/>}{cardArray[i][2]}/ hour</h4>
            </Card>
        </li>
    )
}

export default function Pricing(){
    const [_selected, _setSelected] = useState(1)
    const selected = useRef(_selected)
    const setSelected = (value) => {
        selected.current = value
        document.getElementById("pricelist").style.transform = "scale(1.05, 1.05)"
        _setSelected(value)
    }

    return(
        <div className={"pricing"}>
            <div className={"grid-container2"}>
                <div className={"arrowLeft"} onClick={() => {
                    var pri = document.getElementById("pricelist");
                    if (_selected === 2)
                        pri.setAttribute("margin", "0 5em 0 0")
                    setSelected(selected + 1)
                }}>
                    <MdOutlineArrowBackIosNew size={70} className={"arrBack"}/>
                </div>

                <div id="prices" className={"prices"}>
                    <h1 style={{margin: "0.5em 0 1.25em 0"}}>Standard Pricing</h1>
                    <p></p>
                    <ul id="pricelist" className={"grid-container3"} style={{height:"80%"}}>
                        {makeCards()}
                    </ul>
                </div>

                <div className={"arrowRight"}>
                    <MdOutlineArrowForwardIos size={70} className={"arrNext"}/>
                </div>
            </div>
        </div>
    )
}