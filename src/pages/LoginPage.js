import React from "react";
import { GoogleOAuthProvider,GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import './LoginPage.scss'

const LoginPage = () => {
    const navigate = useNavigate();
  return (
    <div className="login-page">
        <h1>Welcome</h1>
      <GoogleOAuthProvider clientId="416779874033-47c756r5e7g9lpp5dkf3rp7mvifectah.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
            navigate("/dashboard");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        
      </GoogleOAuthProvider>
      
    </div>
  );
};

export default LoginPage;
