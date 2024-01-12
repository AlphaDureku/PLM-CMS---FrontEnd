import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { InputWrapper } from '@mantine/core';


export default function (){
    const [value, setValue] = useState('');

    return(
        <>
        <InputWrapper 
        label="Description"
        size='md' 
        styles={{
            label: {
            fontWeight: '600'
            }
        }} >
        <ReactQuill 
                theme="snow" 
                value={value} 
                onChange={setValue}
                className="custom-quill"
                placeholder='Description' />
        </InputWrapper>
         

        </>
    );
}