import React, { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../LoginForm/login.css";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

const LOGIN_URL = "/api/login";

const LoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isError, setIsError] = useState(false);

  // const referer = props.location.state
  //   ? props.location.state.referer
  //   : "/dashboard";

  // const { setAuthTokens } = useAuth();

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg();
  }, [email, pwd]);

  // function postLogin() {
  //   axios
  //     .post(LOGIN_URL, {
  //       email,
  //       password: pwd,
  //     })
  //     .then((result) => {
  //       if (result.status === 200) {
  //         setAuthTokens(result.data);
  //         setLoggedIn(true);
  //         console.log(result.data);
  //       } else {
  //         setIsError(true);
  //       }
  //     })
  //     .catch((e) => {
  //       setIsError(true);
  //       console.log(e);
  //     });
  // }

  // if (isLoggedIn) {
  //   return <Navigate to="/dashboard" />;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response.data.content.access_token;
      const userid = response.data.content.user.id;
      localStorage.setItem("user", JSON.stringify(userid));
      localStorage.setItem("token", JSON.stringify(accessToken));
      setAuth({ email, pwd, accessToken });
      setEmail("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="Forms">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/login"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Buat Akun
            </NavLink>
          </div>

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="formTitle">
            <h1>Login</h1>{" "}
          </div>
          <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  autoComplete="off"
                  placeholder="Enter your email"
                  name="email"
                  ref={userRef}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                />
              </div>

              <div className="formField">
                <button type="submit" className="formFieldButton">
                  MASUK
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
