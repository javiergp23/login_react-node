import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel, { inputLabelClasses } from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ 
        minWidth: 120, 
        width: '20%',
        display: 'inline-block',
        margin: '4px',
        marginLeft: '10px',

    }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Pendiente</MenuItem>
          <MenuItem value={20}>En Proceso</MenuItem>
          <MenuItem value={30}>Terminado</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}