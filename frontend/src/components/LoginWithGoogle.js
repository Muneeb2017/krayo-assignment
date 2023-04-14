// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

// const Loginwithgoogle = ({ isLoggedin, setLoggedin }) => {
//   const navigate = useNavigate();
//   // const [isLoggedin, setLoggedin] = useState(false);

//   const handleSuccess = (credentialResponse) => {
//     console.log(credentialResponse.credential);
//     var decoded = jwt_decode(credentialResponse.credential);
//     console.log(decoded);
//     localStorage.setItem("token", credentialResponse.credential);

//     setLoggedin(true);
//     navigate("/home");
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleSuccess}
//       onError={() => {
//         console.log("Login Failed");
//       }}
//     />
//   );
// };
// export default Loginwithgoogle;
import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Loginwithgoogle = ({ isLoggedin, setLoggedin }) => {
  const navigate = useNavigate();
  // const [isLoggedin, setLoggedin] = useState(false);

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse.credential);
    var decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
    localStorage.setItem("token", credentialResponse.credential);

    setLoggedin(true);
    navigate("/home");
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("token");
    setLoggedin(false);
    navigate("/");
  };

  return (
    <>
      {isLoggedin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      )}
    </>
  );
};

export default Loginwithgoogle;
