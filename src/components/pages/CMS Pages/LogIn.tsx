import UsernameForm from "../../Reusable Components/UsernameForm";
import PasswordForm from "../../Reusable Components/PasswordForm";
import { Button } from '@mantine/core';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [showError, setShowError] = useState(false);
  const navigate = useNavigate();


  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    console.log('Submitted:', { username, password });
    navigate('/cms/playground');
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
          >Login
          </Button>
        </div>

        </div>
      </div>
      <div className="LogInPage_Footer_Container">
      <div className="row">
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
     </div>

      </div>
    </>
  );
}
