import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { AuthConsumer } from "../../contexts";
import './login.scss';

export default function Login() {
  const navigate = useNavigate();
  const location: any = useLocation();
  const {user, signIn}= AuthConsumer();
  const fromPath = location.state?.from?.pathname || '/dashboard';

  function handelFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get('username') as string;

    signIn(username, () => {
      navigate(fromPath, {replace: true});
    });
  }

  if(user) {
    return <Navigate to={fromPath} replace />;
  }

  return (
    <div className="page-content login-page">
      <div className="page-section">
        <div className="brand-logo">
          {/* <img src="url('images/j4ys-auth2.svg')" alt="brand-logo" /> */}
        </div>
      </div>
      <div className="page-section">
      <div className="login-form-container">
        <div className="form-header">
          <span className="header-text">Sign in</span>
          <span className="sub-header">New User? Create Account</span>
        </div>
        <form onSubmit={handelFormSubmit}>
          <label>
          Username: 
          <input name="username" type="text"></input>
          </label>
          <button type="submit">Login</button>
        </form>
        <div className="login-divider">
          <div className="or-divider">
            <span className="label">OR</span>
          </div>
        </div>
        <div className="auth2-section">
          <div className="social-login-btns">
            <div className="login-btn google-login">
              <button type="button" className="btn">
                <span className="btn-text">
                  <span className="btn-icon">
                    <FontAwesomeIcon icon={['fab', 'google']}/>
                  </span>
                  Login with Google
                </span>
                </button>
            </div>
            <div className="login-btn facebook-login">
              <button type="button" className="btn">
              <span className="btn-text">
                  <span className="btn-icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']}/>
                  </span>
                  Login with facebook 
                </span>
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}