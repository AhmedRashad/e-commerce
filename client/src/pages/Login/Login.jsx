import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import google_logo from "../../Images/Google Logo.svg";
import logo from "../../Images/eCommerce Logo.svg";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import "./Login.scss";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <img src={logo} alt="Matger Logo" />
          <div className="btn_home">
            <Link to="/">Home</Link>
          </div>
        </nav>
        <div className="card">
          <form onSubmit={onSubmit}>
            <button className="quick-sign">
              <img src={google_logo} alt="Google logo" />
              Sign in with Google
            </button>
            <span className="divider">OR</span>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={onChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
            <div className="input-group">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <a href="/reset-password">Forget your Password?</a>
              {/* We Need to create the reset password page */}
            </div>
            <div className="btn-group">
              <button type="submit">Log in</button>

              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
        <footer>Copyright received - 2022</footer>
      </div>
    </>
  );
}

export default Login;
