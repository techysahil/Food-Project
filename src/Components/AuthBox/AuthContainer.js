import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./Auth.css";

const AuthContainer = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-modal">
      <div className="auth-box">
        <span className="close-button" onClick={onClose}>×</span>
        {isLogin ? (
          <>
            <LoginForm />
            <p>
              Don't have an account?{" "}
              <span className="switch" onClick={() => setIsLogin(false)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <SignupForm />
            <p>
              Already have an account?{" "}
              <span className="switch" onClick={() => setIsLogin(true)}>Sign in</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
