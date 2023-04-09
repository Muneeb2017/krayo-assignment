import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import Header from "../components/Header";
import FilesList from "../components/FilesList";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Loginwithgoogle from "../components/LoginWithGoogle";
const AppRouter = () => {
  const [isLoggedin, setLoggedin] = useState(true);

  const handleLogin = () => {
    setLoggedin(true);
  };

  return (
    <GoogleOAuthProvider clientId="1004046358549-4he79a4vc7os6t8g3agc299t6r1j3ndm.apps.googleusercontent.com">
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={<Loginwithgoogle onLogin={handleLogin} />}
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
