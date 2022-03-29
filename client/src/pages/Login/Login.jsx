import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
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

  const { user, isSuccess, isLoading, isError, meesage } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log(meesage);
    }
    if (isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, meesage, navigate, dispatch]);

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
      <section className="loginContainer">
        <h1 className="login">
          <FaSignInAlt /> Login
        </h1>
        <p>Please <a href="/register">create an account</a></p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div>
            <input
              className="loginInput"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div>
            <input
              className="loginInput"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <dov>
            <button type="submit">Log in</button>
          </dov>
        </form>
      </section>
    </>
  );
}

export default Login;
