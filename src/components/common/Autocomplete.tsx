import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const CustomAutocomplete = ({ options }: { options: string[] }) => {
  const [value, setValue] = React.useState<string | null>('');
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className='w-full md:w-[300px]'>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label='SERVER' />}
        fullWidth={true}
      />
    </div>
  );
};

export default CustomAutocomplete;
