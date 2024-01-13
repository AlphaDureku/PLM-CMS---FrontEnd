import  { useState, useEffect } from 'react';
import { TextInput, InputWrapper } from '@mantine/core';

export default function PostTitleForm({ onChange, clearData, setClearData}) {
  const formstyles = {
    input: {
      border: '1px solid #CACACA',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      width: '72vw',
    },
  };

  const [inputValue, setInputValue] = useState('');

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  useEffect(() => {
    setInputValue('');
    setClearData(false);
  }, [clearData]);

  return (
    <>
      <InputWrapper
        label="Title"
        size='md'
        styles={{
          label: {
            fontWeight: '600',
          },
        }}
      >
        <TextInput
          placeholder="Title"
          size='md'
          styles={formstyles}
          radius='md'
          onChange={handleTitleChange}
          value={inputValue} 
          required
        />
      </InputWrapper>
    </>
  );
}
