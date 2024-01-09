import { TextInput, InputWrapper } from '@mantine/core';


export default function PostTitleForm(){

    const formstyles = {
        input: {
          border: '1px solid #CACACA',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '72vw', 

        },
      };
     
    return(
        <>
        <InputWrapper
        label="Title"
        size='md' 
        styles={{
            label: {
            fontWeight: '600'
            }
        }} >
        <TextInput
            placeholder="Title"
            size='md'
            styles={formstyles}
            radius='md'
        />
        </InputWrapper>

        </>
    );
}