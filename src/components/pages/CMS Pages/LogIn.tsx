import UsernameForm from "../../Reusable Components/UsernameForm";
import PasswordForm from "../../Reusable Components/PasswordForm";
import LogInFooter from "../../CMS Components/LogInFooter";
import { Button,  Loader } from '@mantine/core';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    setErrorMessage('');
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setErrorMessage('');
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login
        navigate('/cms/playground');
      } else {
        // Invalid credentials or other error
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      // Handle network error or other exceptions
      console.log(error);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="LogInPage_Header_Container">
        <img 
          className="LogInPage_PLMLogo"
          src="/images/PLM_Logo_With_Header.png"
          alt="img not found"
        />
        <span className="LogInPage_Header">Content Management System</span>
      </div>
      <div className="LogInPage_Body_Container">
        <div className="LogInPage_Left_Body_Col">
          <img 
            className="LogInPage_BGImage"
            src="/images/LogIn/login_image_bg.png"
            alt="img not found"
          />
        </div>
        <div className="LogInPage_Right_Body_Col">
          <span className="LogInPage_Welcome">Welcome! Please enter your credentials.</span>
          <UsernameForm
            value={username} onChange={handleUsernameChange} 
          />
          <PasswordForm
            value={password} onChange={handlePasswordChange}
          />
          <div className="LogInPage_Button">
            <Button
              variant="filled" 
              radius="xl"
              rightSection={
                <img src="/images/LogIn/rightarrow_logo.png" alt="Image" style={{ width: '25px', height: '25px', marginLeft:'10px' }} />
              }
              style={{
                backgroundColor: "#cca000",
                width: "40%",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
          <div className="ErrorMessageContainer">
        {loading && <Loader size={15} style={{position:'absolute'}} color="#cca000" />}
        {errorMessage && <div className="Login_ErrorMessage">{errorMessage}</div>}
      </div>
        </div>
      </div>
      <div>
        <LogInFooter/>  
      </div>
    </>
  );
}
