
import React from 'react';
import  {Button, Card}  from 'react-bootstrap';
import "./Frontpage.css";
import {FaLinkedin} from "react-icons/fa";


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function frontpage(){

    return(
        <div className="frontPage">
            <div className="grid-container1">
                <Card  className="card-body card whoIAm">
                        <Card.Img className="imgDiv"/>
                        <Card.Title className="card-title">Who am I?</Card.Title>
                        <p className="card-text">As you may have noticed, my name is Thierry Klougbo. I am currently 22 years old, and originate from Togo (Africa)
                            even though I have lived in Belgium for 13 years now.
                            <br/>
                            Currently I am an Applied Informatics student at the university college of Erasmus in Brussels. This goes to show that I am an aspiring
                            Software Developer.
                            After graduating -in 2023- I am planning on working and meanwhile study for another bachelor.
                        </p>
                        <Card.Link href="https://www.linkedin.com/in/thierry-klougbo-880b071b1/" target="_blank" className="btn btn-primary" style={{width:'10%', padding:'0'}}>
                            <FaLinkedin style={{height:'2em', width:'2em'}}/>
                        </Card.Link>
                </Card>

                <Card className="card-body card whatIsThis">
                        <Card.Title className="card-title">So, what is this?</Card.Title>
                        <p className="card-text">First I started making this portfolio by simply using HTML, CSS and JavaScript. After learning PHP in school
                        I made another version using that too. But after realising how much React JS is asced on the jobmarket, I decided to make the final version using
                            that.</p>
                </Card>
            </div>
        </div>
    )
}

export default frontpage;