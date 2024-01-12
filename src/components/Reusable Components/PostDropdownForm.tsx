import { Select, InputWrapper } from '@mantine/core';

export default function PostDropdownForm(){

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
      label="Page ID"
      size='md' 
      styles={{
          label: {
          fontWeight: '600'
          }
      }} >
      <Select
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      size='md'
      radius='md'
      styles={formstyles}
    />
    </InputWrapper>
    </>
);

}