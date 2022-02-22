
import React, {useRef, useState} from 'react';
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdEuro} from "react-icons/md"
import  {Button, Card}  from 'react-bootstrap';
import "./Pricing.css"

// Freelance front-end dev: https://sanderlangendoen.nl/tarieven-freelance-frontend-ontwikkelaar/
//https://www.nationaleberoepengids.nl/android-developer#:~:text=Een%20Android%20Developer%20kan%20rekenen,van%20zijn%20leeftijd%20en%20ervaring.

const cardArray = [["Web front-end", 40, 60, false], ["Web back-end", 0, 0, true], ["Android application backend", 17, 25, false]];
let value = 1
let selected = 0

const makeCards = () =>{

    return cardArray.map((el, i) =>
        <li id={`${i}listItem`} key={`${i}`}>
            <Card className={"pricerange"} id={`pricerange${i}`}>
                <Card.Title className={"class-title ct"}>{cardArray[i][0]}</Card.Title>
                <h4>{<MdEuro/>}{cardArray[i][1]} - {<MdEuro/>}{cardArray[i][2]}/ hour</h4>
            </Card>
        </li>
    )
}

const setSelected = (valueProp) => {
    console.log(`${valueProp}listItem`)
    document.getElementById(`${valueProp}listItem`).style.transform = "scale(1.05, 1.05)"
}

const resetSelected = () => {
    document.getElementById(`0listItem`).style.transform = "scale(1, 1)"
    document.getElementById(`1listItem`).style.transform = "scale(1, 1)"
    document.getElementById(`2listItem`).style.transform = "scale(1, 1)"
}

function Pricing(){
    const [_selected, _setSelected] = useState(0)

    return(
        <div className={"pricing"}>
            <div className={"grid-container2"}>
                <div className={"arrowLeft"} onClick={() => {
                    // var pri = document.getElementById("pricelist");
                    // if (_selected === 2) {
                    //     pri.setAttribute("margin", "0 5em 0 0")
                    //     pri.setAttribute( "overflow", "hidden")
                    // }

                    if (_selected === 0) {
                        _setSelected(0)
                        resetSelected()
                        setSelected(_selected)
                    }
                    else if (_selected === 1 || _selected === 2 ) {
                        _setSelected(_selected - 1)
                        resetSelected()
                        setSelected(_selected)
                    }
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

                <div className={"arrowRight"} onClick={() => {
                    if (_selected === 2 ){
                        resetSelected()
                        setSelected(_selected)
                    }
                    else if (_selected === 0 || _selected === 1){
                        _setSelected(_selected + 1)
                        resetSelected()
                        setSelected(_selected)
                    }
                }}>
                    <MdOutlineArrowForwardIos size={70} className={"arrNext"}/>
                </div>
            </div>
        </div>
    )
}


export default Pricing