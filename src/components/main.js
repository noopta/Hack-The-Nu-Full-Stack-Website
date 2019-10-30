import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './Registration';
import Contact from './contact';
import Projects from './projects';
import Login from './login';
import LandingPage from './landingpage';
import Oakville from './Oakville';
import Motives from './Motives';
import Burlington from './Burlington';
import HaltonHills from './HaltonHills';
import Catered from './Catered';



const Main = () => (

    <Switch>
        <Route exact path= "/" component = {LandingPage} />
        <Route path= "/registration" component = {Registration} />
        <Route  path= "/contact" component = {Contact} />
        <Route  path= "/projects" component = {Projects} />
        <Route  path= "/login" component = {Login} />
        <Route path = "/oakville" component = {Oakville} />
        <Route path = "/motives" component = {Motives} />
        <Route path = "/burlington" component = {Burlington} />
        <Route path = "/haltonhills" component = {HaltonHills} />
        <Route path = "/catered" component = {Catered} />
        

    </Switch>

)
export default Main;
