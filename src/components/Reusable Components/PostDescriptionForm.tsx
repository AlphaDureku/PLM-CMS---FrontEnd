import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InputWrapper } from '@mantine/core';
import { useState, useEffect } from 'react';


export default function PostDescriptionForm({ onChange, clearData, setClearData }) {
    const [inputValue, setInputValue] = useState('');

  const handleDescriptionChange = (content) => {
    setInputValue(content);
    onChange(content);
  };

  useEffect(() => {
    setInputValue('');
    setClearData(false);
  }, [clearData]);

  return (
    <>
      <InputWrapper
        label="Description"
        size='md'
        styles={{
          label: {
            fontWeight: '600',
          },
        }}
      >
        <ReactQuill
          theme="snow"
          value={inputValue}
          onChange={handleDescriptionChange}
          className="custom-quill"
          placeholder='Description'
        />
      </InputWrapper>
    </>
  );
}
