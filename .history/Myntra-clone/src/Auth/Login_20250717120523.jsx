import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

// Login.jsx
useEffect(() => {
  const activeUser = localStorage.getItem("user");
  if (activeUser) {
    dispatch(login());
  }
}, [dispatch]);


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (isLoginPage) {
      // LOGIN flow
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        dispatch(login());
        localStorage.setItem("user", JSON.stringify(storedUser)); 
      } else {
        alert("No account found or incorrect credentials. Please register first.");
      }

    } else {
      // REGISTER flow
      const newUser = { email, password };
      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      localStorage.setItem("user", JSON.stringify(newUser));  
      dispatch(login());
    }

    setEmail("");
    setPassword("");
  };

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="card p-4" style={{ width: "25rem", height: "20rem" }}>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="fs-4 mb-3">
              {isLoginPage ? "LOGIN" : "REGISTER"}
            </div>
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
        </form>

        <div className="mt-3">
          <span>
            {isLoginPage ? "No account? " : "Already have an account? "}
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
