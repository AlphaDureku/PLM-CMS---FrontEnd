import { ChangeEvent, useState } from 'react';
import { PasswordInput, InputWrapper } from '@mantine/core';
import { PasswordFormProps } from "../../Types/CmsPage";

const PasswordForm: React.FC<PasswordFormProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const formstyles = {
    input: {
      borderColor: "#686868",
    },
  };

 

  const validatePassword = (value: string): boolean => {
    const isValid = value.length >= 3;
    if (!isValid) {
      setError('Invalid username: Username must be at least 3 characters.');
    } else {
      setError(null);
    }
    return isValid;
  };


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);

    validatePassword(newValue);
  };

  return (
    <>
      <InputWrapper label="Password" mt='lg' mb='xl'>
        <PasswordInput
          error={error ? 'Invalid Password' : undefined}
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
