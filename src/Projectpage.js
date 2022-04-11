
import React, {useState} from 'react';
import {Box, Grid} from 'grommet';
import "./Projectpage.css";
import {AnimatePresence, motion} from "framer-motion";
import {Markup} from "interweave";
import { Github } from 'grommet-icons';
import {VscGithub} from "react-icons/vsc";

const cardCoursetimer = {
    "id": "cardCoursetimer",
    "class": "projCard",
    "title": "CourseTimer",
    "text": "<p> CourseTimer is an app with an essential simple goal, making it possible to track the time I spend for any specific course." +
        "\n Although it is still deep in production, it is already possible to make an account and start timing." +
        "\n Later on I'd also like to add features as: graphics on which users can see how much they've studied per day, week, month, etc." +
        " Download the CourseTimers apk from my github page, and try it for yourself. " +
        "\n\n <a href='https://github.com/Theirry/CoursTimer/releases' target='_blank'>CourseTimer</a> <p>"
};
const cardUltimata = {
    "id": "cardUltimata",
    "class": "projCard",
    "title": "Discord bot: Ultimata",
    "text": "This is all about ultimata"
};
const cardContent = [cardCoursetimer, cardUltimata];

function Projectpage(){

    const [selectedId, setSelectedId] = useState("");
    const [title, setTitle] = useState("");
    const [itemClass, setItemClass] = useState("");
    const [content, setContent] = useState("");

    let stillPresent = false;



    return(
        <div className={"projectpage"}>


            <div id={'outer_container'}
                 onClick={(e) => {
                     if(e.target !== document.getElementById(selectedId+"hovered")
                         && e.target !== document.getElementById(selectedId+"hoveredTitle")
                         && e.target !== document.getElementById(selectedId+"hoveredContent")
                         && stillPresent){
                         stillPresent = false
                         setSelectedId(null)
                     }

                 }}>

                <Grid className={"gromGrid"}
                    areas={[
                    {name: 'cardCoursetimer', start: [0, 0], end: [0, 0]},
                    {name: 'cardUltimata', start: [2, 0], end: [2, 0]},
                    {name: 'coursetimerPic', start:[1, 0], end: [1,0]},
                    {name: 'discordFrame', start: [2, 1], end: [2, 1]}
                    ]}
                    columns={['medium', 'medium', 'flex']}
                    rows={['small', 'flex']}
                    gap='medium'

                    >

                    {cardContent.map(item => (
                        <Box gridArea={item.id} >
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
                                <motion.div id={item.id + `_backim`} />
                            </motion.div>
                        </Box>
                    ))}

                    <Box gridArea={'coursetimerPic'} id={'coursePic'}></Box>
                    <Box gridArea={'discordFrame'}>
                        {/*https://titanembeds.com/user/administrate_guild/963175225032339540*/}
                        <iframe src="https://titanembeds.com/embed/963175225032339540" height="600" width="800" frameBorder="0"/>
                    </Box>

                </Grid>
            </div>

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
                        <motion.p id={selectedId+"hoveredContent"} className="card-text"><Markup className={'content_markup'} content={content}/></motion.p>
                        {stillPresent = true}
                        {/*<motion.button onClick={() => setSelectedId(null)} >Close</motion.button>*/}
                    </motion.div>

                )}
            </AnimatePresence>

        </div>

    )
}

export default Projectpage;