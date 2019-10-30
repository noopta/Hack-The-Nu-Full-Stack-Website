import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Catered extends Component {
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
                <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://www.clipartwiki.com/clipimg/detail/156-1566813_clipart-definition-research-paper-research-icon-png.png) center / cover'}}>Personal Portfolio</CardTitle>
            
            <CardText>
            A responsive personal portfolio page for yours truly. Designed and coded in React.js. 
            </CardText>
            <CardActions border> 
            <Button colored href= "https://github.com/noopta/Porfolio" target = "_blank"> Matches </Button>
          
           
            </CardActions>
            <CardMenu style = {{color: '#fff'}} >
                <IconButton name= "share"> </IconButton>
            </CardMenu>
            </Card>

    

          
        {/*project 3*/}
        <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://www.clipartwiki.com/clipimg/detail/156-1566813_clipart-definition-research-paper-research-icon-png.png) center / cover'}}>Oakville Cognitive Therapy</CardTitle>
          
          <CardText style = {{fontColor: 'black'}}>
         An E-Commerce site where the user can add/remove products to a shopping cart and do a checkout using PayPal. Designed using pure React.js.
          </CardText>
          <CardActions border> 
          <Button colored href= "https://github.com/noopta/Porfolio" target = "_blank"> Matches </Button>
          
           
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
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn3.iconfinder.com/data/icons/donate-1/67/31-512.png) center / cover'}}>AVL Tree</CardTitle>
           
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
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn3.iconfinder.com/data/icons/donate-1/67/31-512.png) center / cover'}}>Linux Shell</CardTitle>
           
           <CardText>
           Linux shell programmed from scratch in C. Can execute regular shell commands like "cd, ls, ls-1..etc".
           </CardText>
           <CardActions border> 
           <Button colored href ="https://github.com/noopta/CIS-3110-Operating-Systems/tree/master/Linux%20Shell%20in%20C" target = "_blank"> Matches </Button>
           
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
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(http://clipart-library.com/image_gallery2/Brain.png) center / cover'}}>Forecast App</CardTitle>
           
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
             <CardTitle style = {{color: '#fff', height: '176px', background: 'url(http://clipart-library.com/image_gallery2/Brain.png) center / cover'}}>Student Planner</CardTitle>
           
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
                <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fasymmetrical-clipart-19.jpg&f=1&nofb=1&fbclid=IwAR1cYHoXNIichmWzcX43rGI1CQvbyeT6KmHIz1OKiZpVWpwz5N-2RgA99TI) center / cover'}}>RafayShoots</CardTitle>
            
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

        else if(this.state.activeTab === 4){
            return(<div> 
             
              {/*project 1 */}
              <Card shadow= {5} style = {{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://images.all-free-download.com/images/graphiclarge/black_background_airplane_icon_vector_280785.jpg) center / cover'}}>RafayShoots</CardTitle>
             
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
                <Tab>Research & Entreprenurship</Tab>
                <Tab>Charity/Non-Profit</Tab>
                <Tab>Mental Health</Tab>
                <Tab>Environmental</Tab>
                <Tab>International</Tab>
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

export default Catered;