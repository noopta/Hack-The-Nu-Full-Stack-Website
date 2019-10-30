import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormLabel from '@material-ui/core/FormLabel';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckBox() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
 
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup style = {{marginLeft: '50px'}} row>
       
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="Funding"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
        
          />
        }
        label="Marketing"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange('checkedC')}
            value="checkedC"
          
          />
        }

        label="Design"
      />


      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange('checkedD')}
            value="checkedD"
      
          />
        }

        label="Consulting"
      />


      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedE}
            onChange={handleChange('checkedE')}
            value="checkedE"
          
          />
        }

        label="Software"
      />





    </FormGroup>
  );
}