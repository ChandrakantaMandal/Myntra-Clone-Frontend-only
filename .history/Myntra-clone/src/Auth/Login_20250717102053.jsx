import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

 const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(true);

  const

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="card p-4" style={{ width: '25rem', height: '20rem'}}>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="fs-4 mb-3">{isLoginPage ? "LOGIN" : "REGISTER"}</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {isLoginPage ? "Login" : "Register"}
          </button>

          <div>Forgot password?</div>
        </form>
        <div className="mt-3">
          <span>
            {isLoginPage ? "Create account!" : "Already have an account? "}
            <button className="btn btn-link" onClick={togglePage}>
              {isLoginPage ? "Register" : "Login"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;