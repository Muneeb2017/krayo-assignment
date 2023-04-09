import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Loginwithgoogle = () => {
  const navigate = useNavigate();
  const [isLoggedin, setLoggedin] = useState(false);

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setLoggedin(true);
    navigate("/home");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
export default Loginwithgoogle;
