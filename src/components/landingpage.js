import React, {Component} from 'react';
import { Grid, Cell, ProgressBar} from 'react-mdl';
import CountUp from 'react-countup';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Main from './main';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Typist from 'react-typist';

class Landing extends Component {
  
    render()
    
    

    {
   
        return(
            <div > 
            <Grid className = "landing-grid">
             
          
          <Cell style = {{ marginTop: '20px', marginLeft: '310px'}} col = {6}  >
          <h1 style = {{marginBottom: '20px'}}>Halton Connect</h1>
          <Typist>Connecting the connected<Typist.Delay ms={500} /> with the in need to build communities.</Typist>
            <Carousel style = {{marginTop: '20px'}} >
            <Carousel.Item>
            <a href = "http://www.omagarwal.net/city.html" > 
              <img
                
                className="d-block w-100"
                src="https://pbs.twimg.com/media/EEMYhARW4AACQhP.jpg"
                alt="First slide"
              ></img> </a>
              <Carousel.Caption>
                <h3 > Oakville </h3>
                <p>Explore volunteer opportunities and campaigns in Oakville, ON</p>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <a href = "http://www.omagarwal.net/city.html" > 
           
              <img
                className="d-block w-100"
                src="https://www.mariongoard.ca/images/content/The-Burlington-Pier.jpg"
                alt="Third slide"
              /> </a>
     
              <Carousel.Caption>
                <h3>Burlington</h3>
                <p>Explore volunteer opportunities and campaigns in Burlington, ON.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Link to = "/HaltonHills" >
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/33/07/56/330756154599d1d4128c0e8c3a92640d.jpg"
                alt="First slide"
                
              />  </Link>
              <Carousel.Caption>
                <h3>Halton Hills </h3>
                <p>Explore volunteer opportunities and campaigns in HaltonHills, ON</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://www.hhcc.ca/uploads/1/1/5/5/11555339/6305854_orig.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Milton </h3>
                <p>Explore volunteer opportunities and campaigns in Milton, ON</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
          </Cell>

            {/* 
          <Cell col = {6}   >
            <Carousel >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Hamilton</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Cell>


            */}

          

          </Grid> 
          </div>
        )
    }
}

export default Landing;