import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';

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
import SliderScale from './Slider';
import ButtonOption from './ButtonOption';
import DropDown from './DropDown';
import ButtonOption2 from './ButtonOption2';

{ /*
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
*/}
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));




export default function Registration() {
    const [state, setState] = React.useState({
        userInfo: [
            {firstName: ''},
            {lastName: ''},
            {pass: ''},
            {email: ''},
        ],
        Poverty: false,
        Health: false,
        antoine: false,
        aggy: false,
        healthy: false,
      });

      const firstChangedHandler = (event) => {
        setState({
          userInfo:[
             {firstName: event.target.value}
          ]})
      }

      const lastChangedHandler = (event) => {
        setState({
          userInfo:[
             {lastName: event.target.value}
          ]})
      }
      
      const passChangedHandler = (event) => {
        setState({
          userInfo:[
             {pass: event.target.value}
          ]})
      }

      const emailChangedHandler = (event) => {
        setState({
          userInfo:[
             {email: event.target.value}
          ]})
      }
      

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };
    
    const { Poverty, Health, antoine,aggy,healthy } = state;
    const error = [Poverty, Health, antoine,aggy,healthy].filter(v => v).length !== 2;
    

  const classes = useStyles();

  return (

      <Grid>
         
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        
        </Avatar>
        <Typography component="h1" variant="h5">
         Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                onChange = {firstChangedHandler}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange = {lastChangedHandler}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {emailChangedHandler}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange = {passChangedHandler}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to volunteering promotions, opportunities and news on my current services via email."
              />
            </Grid>
          </Grid>
          <Link to = "/motives" > 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >

            Continue 
          </Button>
          </Link>
          <Grid container justify="flex-end">
            <Grid item>
                {/* 
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>

        <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />
       



      </div>
      <Box mt={5}>
       
      </Box>



     
      
    </Container>






  


    </Grid>
  );
}