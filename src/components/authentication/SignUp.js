import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import LoginBanner from "./LoginBanner";
class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="register-wrapper">
          <h2 className="log-text">Sign Up</h2>
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
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="******"
                style={{ width: "45%", margin: "0 auto" }}
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label" for="gridCheck">
                  Remember my details
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Register
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
