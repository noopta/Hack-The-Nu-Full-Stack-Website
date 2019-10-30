import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Strong Disagree"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Disagree"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio color="primary" />}
          label="Neutral"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Radio color="primary" />}
          label="Agree"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="side"
          control={<Radio color="primary" />}
          label="Strong Agree"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </FormControl>
  );
}