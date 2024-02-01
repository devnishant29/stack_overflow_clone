import React, { useState } from "react";
import "./index.css";

function MainQuestion() {
  const [register, setRegister] = useState(false);

  return (
    <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services.</p>
        <div className="sign-in options">
          <div className="single-option">
            <img
              style={{
                maxWidth: "20px",
              }}
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
              alt="google"
            />
            <p>Login with google</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="text" />
                </div>
                <button
                  style={{
                    maxWidth: "80px",
                    marginTop: "15px",
                  }}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="text" />
                </div>
                <button
                  style={{
                    maxWidth: "80px",
                    marginTop: "15px",
                  }}
                >
                  Login
                </button>
              </>
            )}
            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {register ? "Login" : "Register"}?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainQuestion;
