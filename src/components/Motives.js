import React from 'react';
import '../App.css';
import {Grid, Cell} from 'react-mdl';
import CheckBox from './motiveParts/CheckBox';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from 'react-reveal/Fade';
import SliderThing from './motiveParts/Slider';
import CheckTwo from './motiveParts/CheckTwo';
import Radios from './motiveParts/Radios';
import TextArea from './motiveParts/TextArea';

export default function (){

    return(
    <div>
        <Grid className = "motive-grid"> 

        <Cell col = {4}> 
       
        </Cell>

        <Cell col = {4}>
            <Fade bottom> 
        <h1> About You (Cont'd) </h1>
        <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />
        <FormLabel style = {{marginTop: '2rem'}} component="legend">I want to look for organizations that are targeting the following areas: </FormLabel>
        <CheckBox 
        />

        <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />

        <FormLabel component = "legend" >On a Scale of 1-10, how important is making a profitable vs free service for your purposes? </FormLabel>
        <SliderThing />

        <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />
        <FormLabel component = "legend" >What is the main service you can offer when connecting with organizational campaigns? </FormLabel>
        <CheckTwo />

        <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />
        <FormLabel component="legend">I enjoy problem solving tasks where it can be applied to real world issues.</FormLabel>
        <Radios />


        <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />
        <FormLabel component="legend">What types of volunteering / campaigning
 activities are you looking to most get out of our system?</FormLabel>
       
        <TextArea />

        </Fade>
        </Cell>

        <Cell col = {4}>

          
        </Cell>


        </Grid>
    </div>
    );
        
    
}