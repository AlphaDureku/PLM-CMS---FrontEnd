import { ChangeEvent, useState } from 'react';
import { TextInput, InputWrapper } from '@mantine/core';
import { UsernameFormProps } from "../../Types/CmsPage";

// interface UsernameFormPropsWithValidation extends UsernameFormProps {
//   showError: boolean;
// }

const UsernameForm: React.FC<UsernameFormProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const formstyles = {
    input: {
      borderColor: "#686868",
    },
  };

  const validateUsername = (value: string): boolean => {
    const isValid = value.length >= 4;
    if (!isValid) {
      setError('Invalid username: Username must be at least 4 characters.');
    } else {
      setError(null);
    }
    return isValid;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);

    validateUsername(newValue);
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
          error={error ? 'Invalid username: Username must be at least 3 characters.' : undefined}
        />
      </InputWrapper>
    </>
  );
}

export default UsernameForm;
