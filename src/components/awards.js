import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Awards extends Component{
    render() {
        return (
            <div>
               <Grid>
                   <Cell col = {4}>
                       <p>{this.props.awardYear}</p>
                        </Cell>
                   <Cell col = {8}>
                       <h4
                       style = {{marginTop: '0px'}}>
                        {this.props.awardName}
                       </h4>
                       <p>{this.props.awardDescription}</p>
                        </Cell>
               </Grid>
            </div>

        )
    }
}

export default Awards;