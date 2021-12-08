
import Header from "./partials/Header";
import "./Frontpage.css";
import React from 'react';



function frontpage(){

    return(
        <div className="frontPage">
            <div className="grid-container1">
                <div className="card whoIAm">
                    <div className="imgDiv"></div>
                        <div className="card-body">
                            <h5 className="card-title">Who am I?</h5>
                            <p className="card-text">This section will be about me. Who am I?
                                Where do I come from? Etc...</p>
                            <a href="https://www.linkedin.com/in/thierry-klougbo-880b071b1/" target="_blank"
                               className="btn btn-primary">LinkedIn</a>
                        </div>
                </div>

                <div className="card whatIsThis">
                    <div className="card-body">
                        <h5 className="card-title">What is this?</h5>
                        <p className="card-text">This section will be about the website itself. Why am I making it. What
                            have I learned while doing it...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default frontpage;