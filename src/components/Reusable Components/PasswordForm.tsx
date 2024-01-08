import { ChangeEvent } from 'react';
import { PasswordInput, InputWrapper } from '@mantine/core';
import { PasswordFormProps } from "../../Types/CmsPage";

const PasswordForm: React.FC<PasswordFormProps> = ({ value, onChange }) => {

  const formstyles = {
    input: {
      borderColor: "#686868",
    },
  };

 



  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);

   
  };

  return (
    <>
      <InputWrapper label="Password" mt='lg' mb='xl'>
        <PasswordInput
          styles={formstyles}
          leftSectionPointerEvents="none"
          leftSection={
            <img src="/images/LogIn/lock_logo.png" alt="Image" style={{ width: '20px', height: '20px' }} />
          }
          placeholder="Password"
          value={value}
          onChange={handleInputChange}
        />
      </InputWrapper>
    </>
  );
}

export default PasswordForm;
