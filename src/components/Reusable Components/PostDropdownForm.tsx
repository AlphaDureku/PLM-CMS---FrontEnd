import { useState, useEffect } from 'react';
import { Select, InputWrapper } from '@mantine/core';

export default function PostDropdownForm({ label, data, onChange, clearData, setClearData }) {
  const formStyles = {
    input: {
      border: '1px solid #CACACA',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      width: '72vw',
    },
  };

  const handleSelectChange = (selectedValue) => {
    onChange(selectedValue);
  };

  useEffect(() => {
    if (clearData) {
      setClearData(false);
    }
  }, [clearData, setClearData]);

  return (
    <>
      <InputWrapper
        label={label}
        size='md'
        styles={{
          label: {
            fontWeight: '600',
          },
        }}
      >
        <Select
          placeholder="Pick value"
          data={data}
          size='md'
          radius='md'
          styles={formStyles}
          onChange={handleSelectChange}
          value={clearData ? null : undefined}
          required
        />
      </InputWrapper>
    </>
  );
}
