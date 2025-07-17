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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(login());  // Auto login if user data exists in localStorage
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
      return;  // Prevent login
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        password,
      })
    );

    dispatch(login());   // Set Redux auth state

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

          <div className="mt-2">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                localStorage.removeItem("user");
                dispatch(logout());
                alert("Logged out.");
              }}
            >
              Logout
            </button>
          </div>
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
