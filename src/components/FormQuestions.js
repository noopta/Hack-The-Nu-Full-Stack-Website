
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Cell } from 'react-mdl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {state,useState, setState} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

  

export default function FormQuestions(props){ 
    const classes = useStyles();
    
    const [state, setState] = React.useState({
        Poverty: true,
        Health: false,
        antoine: false,
      });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

     
    const { Poverty, Health, antoine } = state;
    const error = [Poverty, Health, antoine].filter(v => v).length !== 2;
      
    

    <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">I want to look for organizations that are targetting: </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={Poverty} onChange={handleChange('Poverty')} value="gilad" />}
            label="Poverty"
          />
          <FormControlLabel
            control={<Checkbox checked={Health} onChange={handleChange('Health')} value="jason" />}
            label="Mental Health"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
}

