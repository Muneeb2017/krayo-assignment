// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
// import App from "../components/App";
// import Header from "../components/Header";
// import FilesList from "../components/FilesList";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Loginwithgoogle from "../components/LoginWithGoogle";
// const AppRouter = () => {
//   const [isLoggedin, setLoggedin] = useState(false);

//   return (
//     <GoogleOAuthProvider clientId="1004046358549-4he79a4vc7os6t8g3agc299t6r1j3ndm.apps.googleusercontent.com">
//       <BrowserRouter>
//         <div className="container">
//           <Header />
//           <div className="main-content">
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <Loginwithgoogle
//                     isLoggedin={isLoggedin}
//                     setLoggedin={setLoggedin}
//                   />
//                 }
//               />

//               <Route
//                 path="/home"
//                 element={isLoggedin ? <App /> : <p>You are not logged in</p>}
//               />
//               <Route
//                 path="/list"
//                 element={
//                   isLoggedin ? <FilesList /> : <p>You are not logged in</p>
//                 }
//               />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </GoogleOAuthProvider>
//   );
// };

// export default AppRouter;

// // //home n list on same page
// // //login part

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Link,
  useNavigate,
} from "react-router-dom";
import App from "../components/App";
import Header from "../components/Header";
import FilesList from "../components/FilesList";
import { GoogleOAuthProvider, googleLogout } from "@react-oauth/google";
import Loginwithgoogle from "../components/LoginWithGoogle";

const HeaderNav = () => {
  const [isLoggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("token");
    setLoggedin(false);
    navigate("/");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          {isLoggedin && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

const AppRouter = () => {
  const [isLoggedin, setLoggedin] = useState(localStorage.getItem("token"));

  return (
    <GoogleOAuthProvider clientId="1004046358549-4he79a4vc7os6t8g3agc299t6r1j3ndm.apps.googleusercontent.com">
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <Loginwithgoogle
                    isLoggedin={isLoggedin}
                    setLoggedin={setLoggedin}
                  />
                }
              />
              <Route
                path="/home"
                element={isLoggedin ? <App /> : <p>You are not logged in</p>}
              />
              <Route
                path="/list"
                element={
                  isLoggedin ? <FilesList /> : <p>You are not logged in</p>
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default AppRouter;
