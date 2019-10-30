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
      
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="volunteer"
          control={<Radio color="primary" />}
          label="Volunteer"
          labelPlacement="end"
        />

      <FormControlLabel
          value="organization"
          control={<Radio color="primary" />}
          label="Organization"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}