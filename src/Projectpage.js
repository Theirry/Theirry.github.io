
import React from 'react';
import {Box, Grid} from 'grommet';
import "./Projectpage.css";


function Projectpage(){

    return(
        <div className={"projectpage"}>
            <Grid className={"gromGrid"}
                areas={[
                {name: 'coursetimer', start: [0, 0], end: [0, 0]},
                {name: 'ultimata', start: [1, 0], end: [1, 0]},
                ]}
                columns={['medium', 'medium', 'medium']}
                rows={['small', 'small']}
                gap='medium'
                >
                <Box gridArea={"coursetimer"} >
                    <h1>CourseTimer</h1>
                </Box>
                <Box gridArea={"ulimata"} >
                    <h1>Ultimata</h1>
                </Box>
            </Grid>


        </div>

    )
}

export default Projectpage;