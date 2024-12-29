import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import PropTypes from 'prop-types';
import './Login.css';

export default function Login(setTokenThingy: any) {
  return(
    <div className="login-wrap-wrapper">
    <div className="login-wrapper">
      <h1>
        Welcome to Major Arcana!
      </h1>

      <div>
        This site is currently only open for use by a select group
        of initiates, who may log in using Google.
      </div>

      <div className="oauth-wrapper">
        <GoogleOAuthProvider clientId="87928211828-tgq8r75ntrl2d3qn6nujnldl9i99rsct.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialsResponse) => {
            setTokenThingy.setToken(credentialsResponse.credential);
          }}
         onError={() => {
            console.log("Login failed");
          }}
        />
        </GoogleOAuthProvider>
      </div>

      <div>
        If you would like to become an initiate or are having trouble,
        please <a href="mailto:oracle@majorarcana.net">contact The Oracle</a>!
      </div>

      </div>
      </div>
  )
}
