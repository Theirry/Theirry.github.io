
import React from 'react';
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdEuro} from "react-icons/md"
import  {Button, Card}  from 'react-bootstrap';
import "./Pricing.css" //I am stupid

// Freelance front-end dev: https://sanderlangendoen.nl/tarieven-freelance-frontend-ontwikkelaar/
//https://www.nationaleberoepengids.nl/android-developer#:~:text=Een%20Android%20Developer%20kan%20rekenen,van%20zijn%20leeftijd%20en%20ervaring.

const cardArray = [["Web front-end", 40, 60], ["Web back-end", 0, 0], ["Android application backend", 17, 25]];

function makeCards(){
    return cardArray.map((el, i) =>
        <li >
            <Card className={"pricerange"} id={`pricerange${i}`}>
                <Card.Title className={"class-title ct"}>{cardArray[i][0]}</Card.Title>
                <h4>{<MdEuro/>}{cardArray[i][1]} - {<MdEuro/>}{cardArray[i][2]}/ hour</h4>
            </Card>
        </li>
    )
}

export default function Pricing(){
    return(
        <div className={"pricing"}>
            <div className={"grid-container2"}>
                <div className={"arrowLeft"}>
                    <MdOutlineArrowBackIosNew size={70} className={"arrBack"}/>
                </div>

                <div className={"prices"}>
                    <h1 style={{margin: "0.5em 0 0.75em 0"}}>Standard Pricing</h1>
                    <p></p>
                    <ul className={"grid-container3"} style={{height:"80%"}}>

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