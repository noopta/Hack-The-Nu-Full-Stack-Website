import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Chip, ChipContact} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Awards from './awards';
import {Button} from 'reactstrap';





class Contact extends Component {
    render(){
        return(
            <div >
                <Grid>
                   <Cell col = {4}>
                       <div style = {{textAlign: 'center'}}>

                       {/* <img 
                        src = "https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt = "avatar"
                        style= {{height: '200px'}}
                        
                        /> */}
                        </div>
                        <h2 style = {{paddingTop: '2em'}}> Contact Me </h2>
                        <h4 style = {{color: 'grey'}}>Anupta Islam</h4>

                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>If you like what you've seen and want to get in touch, reach out to me via the following:  </p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />
                       
                        <h5>Phone </h5>
                        <p><i style = {{paddingRight: '10px'}}className = "fa fa-phone-square" />519 993 8342</p>
                        <h5>Email</h5>
                        <p> <i style = {{paddingRight: '10px'}}className = "fa fa-envelope-square" />anupta@uoguelph.ca</p>
                       
                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />



                   </Cell>

                   <Cell className = "contact-right-col" col = {8}>
                        
                    <h2 >Available Hours</h2>
                    
                    <h5>Monday - Friday </h5>
                    <p>8AM - 9PM </p>
                    
                    <hr  style = {{borderTop: '3px solid #833fb2', width: '50%'}} />

                    <h5>Saturday - Sunday / Holiday</h5>
                    <p>11AM - 9PM </p>

                
                   
                    {/*
                    <Education 
                    startYear = "8 AM"
                    endYear = "9 PM"
                    schoolName = "Monday - Friday"
                    schoolDescription = ""
                     />

                    <Education 
                    startYear = "11 AM"
                    endYear = "9 PM"
                    schoolName = "Saturday - Sunday"
                    schoolDescription = ""
                    />   
                    */}
                    
                    
                
                   </Cell>
               </Grid>


            </div>
        )
    }
}

export default Contact;