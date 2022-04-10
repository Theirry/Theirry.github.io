
import React, {useState} from 'react';
import {Box, Grid} from 'grommet';
import "./Projectpage.css";
import {AnimatePresence, motion} from "framer-motion";

const cardCoursetimer = {
    "id": "cardCoursetimer",
    "class": "projCard",
    "title": "CourseTimer",
    "text": "This is all about CT"
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

            <div id={'outer-container'}
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
                    ]}
                    columns={['medium', 'small', 'flex']}
                    rows={['medium', 'flex']}
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
                            </motion.div>
                        </Box>
                    ))}

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
                        <motion.p id={selectedId+"hoveredContent"} className="card-text">{content}</motion.p>
                        {stillPresent = true}
                        {/*<motion.button onClick={() => setSelectedId(null)} >Close</motion.button>*/}
                    </motion.div>

                )}
            </AnimatePresence>

        </div>

    )
}

export default Projectpage;