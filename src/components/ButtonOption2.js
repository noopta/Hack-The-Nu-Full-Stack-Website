import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function ButtonOption() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      
      <RadioGroup  aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="sdisagree"
          control={<Radio color="primary" />}
          label="Strongly Disagree"
          labelPlacement="end"
        />

      <FormControlLabel
          value="disagree"
          control={<Radio color="primary" />}
          label="Disagree"
          labelPlacement="end"
        />


<FormControlLabel
          value="neutral"
          control={<Radio color="primary" />}
          label="Neutral"
          labelPlacement="end"
        />

         <FormControlLabel
          value="agree"
          control={<Radio color="primary" />}
          label="Agree"
          labelPlacement="end"
        />

<FormControlLabel
          value="sAgree"
          control={<Radio color="primary" />}
          label="Strongly Agree"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}