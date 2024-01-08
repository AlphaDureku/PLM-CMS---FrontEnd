import { ChangeEvent } from 'react';
import { TextInput, InputWrapper } from '@mantine/core';
import { UsernameFormProps } from "../../Types/CmsPage";

// interface UsernameFormPropsWithValidation extends UsernameFormProps {
//   showError: boolean;
// }

const UsernameForm: React.FC<UsernameFormProps> = ({ value, onChange }) => {


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
      <InputWrapper label="Username" mt='lg'>
        <TextInput
          styles={formstyles}
          leftSectionPointerEvents="none"
          leftSection={
            <img src="/images/LogIn/account_logo.png" alt="Image" style={{ width: '20px', height: '20px' }} />
          }
          placeholder="Username"
          value={value}
          onChange={handleInputChange}
        />
      </InputWrapper>
    </>
  );
}

export default UsernameForm;
