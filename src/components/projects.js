import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
    if (this.state.activeTab === 0){
        return (

            <div className= "projects-grid">
            {/*project 1 */}
            <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Personal Portfolio</CardTitle>
            
            <CardText>
            A responsive personal portfolio page for yours truly. Designed and coded in React.js. 
            </CardText>
            <CardActions border> 
            <Button colored href= "https://github.com/noopta/Porfolio" target = "_blank"> Github </Button>
          
            <Button colored href = "/" target = "_blank"> LiveDemo </Button>
            </CardActions>
            <CardMenu style = {{color: '#fff'}} >
                <IconButton name= "share"> </IconButton>
            </CardMenu>
            </Card>

    

          
        {/*project 3*/}
        <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>E-Commerce Shopping Cart</CardTitle>
          
          <CardText>
         An E-Commerce site where the user can add/remove products to a shopping cart and do a checkout using PayPal. Designed using pure React.js.
          </CardText>
          <CardActions border> 
          <Button colored target = "_blank" href = "https://github.com/noopta/e-commerce-site/tree/master/store-recording" > Github </Button>
          
          <Button colored href ="https://tender-shockley-58dd40.netlify.com/" target = "_blank"> LiveDemo </Button>
          </CardActions>
          <CardMenu style = {{color: '#fff'}} >
              <IconButton name= "share"> </IconButton>
          </CardMenu>
          </Card>
            
            

                  {/*project 4*/}
        <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Full Stack Forecast App</CardTitle>
          
          <CardText>
         Full stack web application which has user authentication for a log in page. Uses API to display temperature, wind angles, humidy, etc given the city and country entered. 
          </CardText>
          <CardActions border> 
          <Button colored > Coming Soon! Will be up in 3 weeks. </Button>
          
    
          </CardActions>
          <CardMenu style = {{color: '#fff'}} >
              <IconButton name= "share"> </IconButton>
          </CardMenu>
          </Card>
      
        
            </div>
            
            )

            

        } else if(this.state.activeTab === 1){
            return(
            <div className = "projects-grid">
                <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/teepublic/image/private/s--qNvCotH5--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1526688695/production/designs/2701810_0.jpg) center / cover'}}>AVL Tree</CardTitle>
           
           <CardText>
           AVL Tree that can take in user inputs. User is able to add keys, remove and search for keys as well as see how many nodes there are.
           </CardText>
           <CardActions border> 
           <Button colored> Github </Button>
         
           </CardActions>
           <CardMenu style = {{color: '#fff'}} >
               <IconButton name= "share"> </IconButton>
           </CardMenu>
           </Card>


           {/*project 2 */}

           <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/teepublic/image/private/s--qNvCotH5--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1526688695/production/designs/2701810_0.jpg) center / cover'}}>Linux Shell</CardTitle>
           
           <CardText>
           Linux shell programmed from scratch in C. Can execute regular shell commands like "cd, ls, ls-1..etc".
           </CardText>
           <CardActions border> 
           <Button colored href ="https://github.com/noopta/CIS-3110-Operating-Systems/tree/master/Linux%20Shell%20in%20C" target = "_blank"> Github </Button>
           
           </CardActions>
           <CardMenu style = {{color: '#fff'}} >
               <IconButton name= "share"> </IconButton>
           </CardMenu>
           </Card>

           {/*project 3 */}

           <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/teepublic/image/private/s--qNvCotH5--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1526688695/production/designs/2701810_0.jpg) center / cover'}}>Tree Builder</CardTitle>
           
           <CardText>
           Balanced AVL Tree that reads a file and places the keys into a tree. 
           </CardText>
           <CardActions border> 
           <Button colored href ="https://github.com/noopta/CIS-3490" target = "_blank"> Github </Button>
        
           
           </CardActions>
           <CardMenu style = {{color: '#fff'}} >
               <IconButton name= "share"> </IconButton>
           </CardMenu>
           </Card>


         
            </div>
            )
        }
        else if(this.state.activeTab ===2){
            return(
            <div className = "projects-grid">
                   {/*Java/SQL 1 */}

         <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsJZIcMtEuRajOLm6zw7ZNAhsSrS6ZywublyyfeSrB8cK_VoLaQ) center / cover'}}>Forecast App</CardTitle>
           
           <CardText>
           A weather forecast app I created using Java and the OpenWeatherMap API to grab weather information. User can type in any city in the world and the app will output the temperature, wind angles, humidity, etc. right away.
           </CardText>
           <CardActions border> 
           <Button colored href ="https://github.com/noopta/WeatherApp" target = "_blank"> Github </Button>
     
           </CardActions>
           <CardMenu style = {{color: '#fff'}} >
               <IconButton name= "share"> </IconButton>
           </CardMenu>
           </Card>
            
            {/* Java / SQL project #2 */}
           <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsJZIcMtEuRajOLm6zw7ZNAhsSrS6ZywublyyfeSrB8cK_VoLaQ) center / cover'}}>Student Planner</CardTitle>
           
           <CardText>
                A Java GUI I made which allows a user to add, or remove the courses they have to take in their program. The GUI connects to an SQL database to create log in information, and to create tables for removing/adding courses. See my github ReadMe for more.
           </CardText>
           <CardActions border> 
           <Button colored href ="https://github.com/noopta/CIS-2430" target = "_blank"> Github </Button>
           
          
           </CardActions>
           <CardMenu style = {{color: '#fff'}} >
               <IconButton name= "share"> </IconButton>
           </CardMenu>
           </Card>

            
            </div>
            )
        }
        else if(this.state.activeTab === 3){
           return(<div> 
            
             {/*project 1 */}
             <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/792484_cc98_3.jpg) center / cover'}}>RafayShoots</CardTitle>
            
            <CardText>
            A portfolio page I designed for a photographer based in Toronto, Ontario. Created using React, HTML and CSS. 
            </CardText>
            <CardActions border> 
            <Button colored href= "https://github.com/noopta/noopta.github.io" target = "_blank"> Github </Button>
          
            <Button colored href = "https://noopta.github.io/" target = "_blank"> LiveDemo </Button>
            </CardActions>
            <CardMenu style = {{color: '#fff'}} >
                <IconButton name= "share"> </IconButton>
            </CardMenu>
            </Card>
             

           </div>
           )
        }
    }  

    render(){
        return(
            <div className = "category-tabs"> 
              <Tabs activeTab={this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>C</Tab>
                <Tab>Java/SQL</Tab>
                <Tab>HTML/CSS</Tab>
              </Tabs>

             
                  <Grid>
                    <Cell col = {12} >
                        <div className = "content">{this.toggleCategories()}</div>
                    </Cell>
                  </Grid>
                  {/*
                  {this.toggleCategories()}
                  */}
            
            </div>
        )
    }
}

export default Projects;