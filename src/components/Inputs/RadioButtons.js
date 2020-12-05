import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtons = () => {
  const [value, setValue] = React.useState('homeowner');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Title</FormLabel>
      <RadioGroup aria-label="Homeowner" name="title" value={value} onChange={handleChange}>
        <FormControlLabel value="homeowner" control={<Radio />} label="Homeowner" labelPlacement="end"/>
        <FormControlLabel value="builder" control={<Radio />} label="Builder" />
        <FormControlLabel value="contractor" control={<Radio />} label="Contractor" />
        <FormControlLabel value="designer" control={<Radio />} label="designer" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons