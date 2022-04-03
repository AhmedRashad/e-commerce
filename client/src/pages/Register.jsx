import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { LockClosedIcon } from "@heroicons/react/solid";
import { GrGoogle } from "react-icons/gr";
import ecommerceLogo from "../Images/eCommerce Logo.svg"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isLoading, isError, meesage } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log(meesage);
    }

    if (isSuccess || user) {
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
    if (password !== password2) {
      console.log("Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
          <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src={ecommerceLogo}
                alt="Matger Logo"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div>
              <button className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <GrGoogle className="mr-4" />
                Sign up with google
              </button>
            </div>
            <div className="flex justify-center text-zinc-500 items-center relative after:content-[''] after:w-1/3 after:absolute after:right-0 after:bg-zinc-400 after:h-px before:content-[''] before:w-1/4 before:absolute before:left-0 before:bg-zinc-400 before:h-px mt-1">Or continue with</div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="fullname" className="block text-zinc-500 text-sm font-bold mb-2">Fullname</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={name}
                  autoComplete="name"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mt-4 text-zinc-500 text-sm font-bold mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mt-4 text-zinc-500 text-sm font-bold mb-2">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="password2" className="block mt-4 text-zinc-500 text-sm font-bold mb-2">Confirm Password</label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  value={password2}
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900 underline decoration-1"
                >Accept <Link to="#" className="text-indigo-600">Terms</Link> and <Link to="#" className="text-indigo-600">Policy</Link>.</label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
