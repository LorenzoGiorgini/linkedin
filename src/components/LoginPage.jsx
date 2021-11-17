import { Container,Row,Col } from "react-bootstrap"
import "../CssStyles/Login.css"

const LoginPage = (props) =>{
    return( 
        <>
        <Container>
            <Row className="align-item-center justify-content-center">
                <Col md={6} >
            
  <nav className="header">
    <div className="header-icon col-xs-12">
    
    </div>
  </nav>
  <hr />
  <div className=" text-center">
    <h1 className="display-4">Sign in</h1>
    <p className="lead">
      stay updated on your professional world
      
    </p>
  </div>
  <div className="container-fluid ">
    <div className="content">
      <div className="login-with-social mt-4">
        <div className="row justify-content-center">
          
        </div>
        <div className="row justify-content-center">
          <svg
            className="fb"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={20}
            height={20}
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              strokeDasharray
              strokeDashoffset={0}
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,172v-172h172v172z" fill="none" />
              <g fill="#ffffff">
                <path d="M86,10.32c-41.796,0 -75.68,33.884 -75.68,75.68c0,37.9432 27.95,69.27128 64.36928,74.74432v-54.68568h-18.72392v-19.89352h18.72392v-13.23712c0,-21.91624 10.67776,-31.53792 28.89256,-31.53792c8.72384,0 13.33688,0.64672 15.52128,0.94256v17.36512h-12.42528c-7.73312,0 -10.43352,7.33064 -10.43352,15.59352v10.87384h22.66272l-3.07536,19.89352h-19.58736v54.84736c36.93872,-5.01208 65.43568,-36.59472 65.43568,-74.906c0,-41.796 -33.884,-75.68 -75.68,-75.68z" />
              </g>
            </g>
          </svg>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 res">
            <button type="button" className="btn btn-primary1 btn-lg">
              CONTINUE WITH FACEBOOK
            </button>
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <svg
            className="apple"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={20}
            height={20}
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              strokeDasharray
              strokeDashoffset={0}
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,172v-172h172v172z" fill="none" />
              <g fill="#ffffff">
                <path d="M153.17406,119.54c-3.70875,8.23719 -5.49594,11.91906 -10.26625,19.18875c-6.67844,10.15875 -16.09813,22.84375 -27.735,22.92438c-10.36031,0.09406 -13.03438,-6.75906 -27.10344,-6.63813c-14.05563,0.06719 -16.985,6.7725 -27.35875,6.665c-11.65031,-0.1075 -20.55938,-11.52937 -27.23781,-21.67469c-18.67813,-28.44719 -20.65344,-61.79906 -9.11063,-79.53656c8.17,-12.5775 21.08344,-19.96812 33.2175,-19.96812c12.3625,0 20.12938,6.78594 30.34188,6.78594c9.91687,0 15.95031,-6.79938 30.24781,-6.79938c10.80375,0 22.22562,5.88563 30.39562,16.04438c-26.71375,14.64687 -22.37344,52.79594 4.60906,63.00844zM107.31188,29.1325c5.20031,-6.67844 9.15094,-16.09812 7.71312,-25.6925c-8.47906,0.57781 -18.39594,5.99313 -24.1875,13.0075c-5.25406,6.39625 -9.60781,15.88313 -7.91469,25.06094c9.25844,0.29563 18.83937,-5.22719 24.38906,-12.37594z" />
              </g>
            </g>
          </svg>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 res">
            <button type="button" className="btn btn-primary2 btn-lg">
              CONTINUE WITH APPLE
            </button>
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <img
            className="google"
            src="https://img.icons8.com/color/50/000000/google-logo.png" alt="google icon"
            width={20}
            height={20}
          />
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 res">
            <button type="button" className="btn btn-primary3 btn-lg">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
          <div className="divider">
            <div>
              <strong className="or " />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <form className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group  ">
            <label className="pass-n-mail" htmlFor="exampleInputEmail1">
              username
            </label>
            <input
              type="email"
              className="form-control sq-borders input-text "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </form>
        <form className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group ">
            <label className="pass-n-mail" htmlFor="exampleInputPassword1">
            password
            </label>
            <input
              type="password"
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
          <div className="row  remember-me">
            <div className="checkbox col-12 col-sm-6 col-md-6 my-2 my-sm-1 my-md-1 my-lg-1 my-md-1 my-xl-1 form-group form-check remember-me">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label rem-label pass-n-mail1 "
                htmlFor="exampleCheck1"
              >
                Remember me
              </label>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-md-3 mb-lg-3 ">
              <a
                href="home.html"
                type="submit"
                className="btn btn-primary log-in"
              >
                LOG IN
              </a>
            </div>
          </div>
        </form>
        {/* </div>
                  <div class='row justify-content-center'>
                  <div class="col-12 col-md-6 col-lg-6 mb-4 mb-md-4 ">
                      <button type="submit" class="btn btn-primary log-in">LOG IN</button>
                  </div>
               </div> */}
        {/* <div class="col-12 col-md-6 col-lg-6 mb-4 mb-md-3 mb-lg-5 mt-xs-3 mt-sm-2 mt-md-3">
                      <button type="submit" class="btn btn-primary log-in">LOG IN</button>
                  </div> */}
      </div>
      <div id="sign-up-section">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-12 my-2 my-md-1 my-lg-1">
            <div className="divider">{/* <strong>OR</strong> */}</div>
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
  </Col>
  </Row>
  </Container>
</>
 )

}
 export default LoginPage



