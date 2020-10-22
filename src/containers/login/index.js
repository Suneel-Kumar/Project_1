import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Form } from 'reactstrap';
import './style.css'
import { SiTwitter, SiFacebook, SiGoogle, SiLinkedin } from "react-icons/si";

class LoginContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="myCard row">
          <div className="col-6">
            <div className="myLeftCtn">
              <Form className="text-center p-5">
                <h6>WELCOME TO</h6>
                <h2 className="fontStyle text-bold">INFINITY</h2>
                <p>Log in to get in the moment, update on the things that interest you.</p>
                <div className="form-group pt-3">
                  <input className="myInput" type="text" placeholder="Username" id="username" required />
                </div>
                <div className="form-group">
                  <input className="myInput" type="password" placeholder="Password" id="pssword" required />
                </div>
                <div className="form-group">
                  {/* <label><input id="check_1" name="check_1" type="checkbox" required /><small>I read and agree to Terms & Condition</small></label> */}
                  <div >
                    <input type="submit" value="SIGN IN" className="btns" />
                  </div>
                  <p className="p">Don't have an account ? <a className="link">Sign Up Now</a></p>
                  <div >-----------OR-----------</div>
                  <div className="p-2">
                    Continue with social media
                  </div>
                  <div className="icon">
                    <span><SiFacebook /></span>
                    <span><SiTwitter /></span>
                    <span><SiGoogle /></span>
                    <span><SiLinkedin /></span>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="myRightCtn">
              <div className="box text-center">
                <header>INFINITY</header>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h6>
              </div>
            </div>
          </div>
        </div>
        {/* I AM Login <Link to="/">Go to Home</Link> */}
      </div>
    );
  }
}

export default LoginContainer;