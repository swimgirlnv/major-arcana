import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

type Props = {
  setToken: (token: string) => void;
};

const Login: React.FC<Props> = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      const userCredential = isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

      const token = await userCredential.user.getIdToken();
      setToken(token);
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Authentication Error:", error);
      alert("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="login-wrap-wrapper">
      <div className="login-wrapper">
        <h1>Welcome to Major Arcana!</h1>
        <div>
          This site is currently only open for use by a select group of initiates, who may log in using their email.
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="oauth-wrapper">
          <button onClick={handleAuth}>{isLogin ? "Login" : "Sign Up"}</button>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Switch to Sign Up" : "Switch to Login"}
          </button>
        </div>
        <div>
          If you would like to become an initiate or are having trouble, please{" "}
          <a href="mailto:oracle@majorarcana.net">contact The Oracle</a>!
        </div>
      </div>
    </div>
  );
};

export default Login;