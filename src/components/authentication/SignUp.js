import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import LoginBanner from "./LoginBanner";
class SignUp extends Component {
  render() {
    return (
      <div>
        <LoginBanner />
        <div className="register-wrapper">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Last Name</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="form-group">
              <label for="inputEmail4">Display Name</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Sign in
            </button>
          </form>
          <hr />
          <div>
            Already have an account?
            <span className="login-link">
              <Link to="/login"> Sign In </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
