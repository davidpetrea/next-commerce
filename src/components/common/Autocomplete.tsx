import React, { forwardRef, useImperativeHandle } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export type AutocompleteHandle = {
  clearAutocompleteValue: () => void;
};

const CustomAutocomplete = (
  {
    options,
    handleServerChange,
    defaultValue,
  }: {
    options: string[];
    handleServerChange?: (value: string) => void;
    defaultValue?: string;
    ref: any;
  },
  ref: React.Ref<AutocompleteHandle>
) => {
  const [value, setValue] = React.useState<string | null>(defaultValue ?? '');
  const [inputValue, setInputValue] = React.useState('');

  useImperativeHandle(
    ref,
    () => {
      return {
        clearAutocompleteValue() {
          setValue('');
        },
      };
    },
    []
  );

  return (
    <div className='w-full md:w-[300px]'>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
          if (handleServerChange) {
            handleServerChange(newValue ?? '');
          }
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
export default forwardRef(CustomAutocomplete);
