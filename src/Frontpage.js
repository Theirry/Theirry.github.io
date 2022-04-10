
import React, {useState, Component} from 'react';
import {Button, Card}  from 'react-bootstrap';
import {useIsPresent, AnimatePresence, motion} from 'framer-motion';
import "./Frontpage.css";
import InfiniteScroll from "react-infinite-scroller";
import Projectpage from "./Projectpage";


const card1= {
    "id": "card1",
    "class": "whoIAm",
    "title": "Who am I?",
    "text": "As you may have noticed, my name is Thierry Klougbo. I am currently 22 years old, and originate from Togo (Africa) " +
                "\n even though I have lived in Belgium for 13 years now. \n" + <br/> +"\n" +
       "Currently I am an Applied Informatics student at the university college of Erasmus in Brussels. This goes to show that I am an aspiring \n"+
       "Software Developer. \n"+
       "After graduating -in 2023- I am planning on working and meanwhile study for another bachelor."
};
const card2 = {
    "id": "card2",
    "title": "So, what is this?",
    "class": "whatIsThis",
    "text": "At first I started making this portfolio by simply using HTML, CSS and JavaScript. After learning PHP in school\n" +
        "                        I made another version using that too. But after realising how much React JS is asced on the jobmarket, I decided to make the final version using\n" +
        "                            that."
};
const cardContent = [card1, card2];


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



function Frontpage(){

    const [selectedId, setSelectedId] = useState("");
    const [title, setTitle] = useState("");
    const [itemClass, setItemClass] = useState("");
    const [content, setContent] = useState("");
    const [hasMore, setHasMore] = useState(true);

    let stillPresent = false;
    //&& e.target !== document.getElementById("card1")
    //                     && e.target !== document.getElementById("card2")

    //Infinite scroll
    let pageAt = 0;
    let items = [];
    // items.push(Frontpage);
    items.push(Projectpage);
    function loadFunc(){
        pageAt += 1;
        if (pageAt === 1)
            setHasMore(false);
        console.log(hasMore)
    }

    return(
        <div className="frontPage">

            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMore}
                loader={<div className={"loader"} key={0}>Loading ...</div>}
            >
                {items}
            </InfiniteScroll>

            <div id={'outer-container'} className="grid-container1"
            onClick={(e) => {
                if(e.target !== document.getElementById(selectedId+"hovered")
                    && e.target !== document.getElementById(selectedId+"hoveredTitle")
                    && e.target !== document.getElementById(selectedId+"hoveredContent")
                    && stillPresent){
                    stillPresent = false
                    setSelectedId(null)
                }

            }}>

                <div className={"intro"}>
                    <h6 className={"introduction"}>Hello, I am</h6>
                    <h1 className={"introduction"}>Thierry</h1>
                    <h1 className={"introduction"} >Klougbo</h1>
                </div>

                {cardContent.map(item => (
                    <motion.div  id={item.id} layoutId={item.id+"layout"} className={"card-body card " + item.class}
                                 onClick={() => {
                        setTitle(item.title);
                        setContent(item.text);
                        setItemClass(item.class);
                        document.getElementById(item.id).setAttribute("animate", "{{opacity: 0}}")
                        setSelectedId(item.id);

                    }}
                    >
                        <motion.div className="card-title">{item.title}</motion.div>
                    </motion.div>
                ))}

                <div className={"pictureMe"}/>
                {/*animate={{x: [0,100,0]}} transition={{ease: "easeOut", duration:1}}*/}
                <AnimatePresence>
                    {/*{const isPresent = useIsPresent()}*/}
                    {selectedId && (
                        <motion.div  id={selectedId+"hovered"} layoutId={selectedId+"layout"} className={"card-body card hoveredCard"}
                                     key={selectedId}
                                     initial={{ opacity: 0}}
                                     animate={{ opacity: 1}}
                                     exit={{ opacity: 0}}
                        >
                            <motion.div id={selectedId+"hoveredTitle"} className="card-title">{title}</motion.div>
                            <motion.p id={selectedId+"hoveredContent"} className="card-text">{content}</motion.p>
                            {stillPresent = true}
                            {/*<motion.button onClick={() => setSelectedId(null)} >Close</motion.button>*/}
                        </motion.div>

                    )}
                </AnimatePresence>
            </div>
        </div>


    )
}

export default Frontpage;