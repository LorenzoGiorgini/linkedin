import "../CssStyles/Login.css";
import LoginNavBar from "../components/LoginNavBar";
import { Link } from "react-router-dom";

const LoginPage = (props) => {

  const fetchUser = () => {
    try {
      const res = fetch()
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <LoginNavBar/>
          <div className="login-container">
            <div className="login-nested">
            <div className=" text-signin">
              <h1 className="display-7">Sign in</h1>
              <p className="lead">stay updated on your professional world</p>
            </div>
            <div className="container-fluid ">
              <div className="content">
                <div className="row justify-content-center">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    
                  </div>
                </div>
                <div className="form-group">
                  <form className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group  ">
                      <label
                        className="pass-n-mail"
                        htmlFor="exampleInputEmail1"
                      >
                        Username
                      </label>
                      <input
                        onChange={(e) => { 
                          props.setUser({
                            ...props.user,
                            username: e.target.value
                          })
                        }}
                        type="text"
                        className="form-control sq-borders input-text "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </form>
                  <form className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group ">
                      <label
                        className="pass-n-mail"
                        htmlFor="exampleInputPassword1"
                      >
                        Password
                      </label>
                      <input
                        onChange={(e) => { 
                         props.setUser({
                            ...props.user,
                            password: e.target.value
                         })
                        }}
                        type="text"
                        className="form-control sq-borders input-text"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </form>
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4 mb-md-4 ">
                      <h6 className="forgot-pass">Forgot your password?</h6>
                    </div>
                  </div>
                  <form className="checkbox-container ">
                    <div className="row  remember-me d-flex justify-content-center">
                      
                        <Link to="/feed/">
                          <div className="login-btn">
                            Log In
                          </div>
                        </Link>
                      
                    </div>
                  </form>
                </div>
                <div id="sign-up-section">
                  <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-12 my-2 my-md-1 my-lg-1">
                    <div className="divider">
                      <div>
                        <strong className="or " />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12 col-xl-12 ">
                      <div>
                        <h5 className="text-center my-3 dont-have-acc">
                          Don't have an account?
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center mb-2">
                    <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12 col-xl-12 ">
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-secondary signup-btn"
                        >
                          SIGN UP FOR LINKEDIN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </>
  );
};
export default LoginPage;
