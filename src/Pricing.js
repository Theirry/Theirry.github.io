
import React from 'react';
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdEuro} from "react-icons/md"
import  {Button, Card}  from 'react-bootstrap';
import "./Pricing.css" //I am stupid

// Freelance front-end dev: https://sanderlangendoen.nl/tarieven-freelance-frontend-ontwikkelaar/
//

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
                    <ul className={"grid-container3"}>

                        <li>
                            <Card className={"pricerange"} id={"pricerange1"}>
                                <Card.Title className={"class-title ct"}>Web front-end</Card.Title>
                                <h4><MdEuro/>40 - <MdEuro/>60 / hour</h4>
                            </Card>
                        </li>

                        <li>
                            <Card className={"pricerange"} id={"pricerange2"}>
                                <Card.Title className={"class-title ct"}>Web back-end</Card.Title>
                                <h4></h4>
                            </Card>
                        </li>

                        <li>
                            <Card className={"pricerange"} id={"pricerange3"}>
                                <Card.Title className={"class-title ct"}>Android application backend</Card.Title>
                                <h4><MdEuro/>17 - <MdEuro/>25 / hour</h4>
                            </Card>
                        </li>

                    </ul>
                </div>

                <div className={"arrowRight"}>
                    <MdOutlineArrowForwardIos size={70} className={"arrNext"}/>
                </div>
            </div>
        </div>
    )
}