import { NavLink, useNavigate } from "react-router-dom";
import { getToken } from "../actions/login.action";
import { store } from "../index";
import { useRef } from "react";
import { useSelector } from "react-redux";
//import { userLogin } from "../services/api"

const SignIn = () => {
  const navigate = useNavigate();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.current[2].checked) {
      localStorage.setItem("userEmail", form.current[0].value);
    } else {
      localStorage.removeItem("userEmail");
    }

    const loginData = {
      email: form.current[0].value,
      password: form.current[1].value,
    };

    store.dispatch(getToken(loginData, navigate));
  };

  // const token = useSelector((state) => state.loginReducer)

  const errorMessage = useSelector((state) => state.loginReducer).errorMessage;

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form
            ref={form}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                defaultValue={
                  localStorage.getItem("userEmail")
                    ? localStorage.getItem("userEmail")
                    : null
                }
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                defaultChecked={
                  localStorage.getItem("userEmail") ? true : false
                }
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignIn;
