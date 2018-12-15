import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import LoginBanner from "./LoginBanner";
class LogIn extends Component {
  render() {
    return (
      <div>
        <LoginBanner />
        <div className="login-wrapper">
          <form action="">
            <div className="form-group">
              <label for="email">Username</label>
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="******"
                name="password"
                required
              />
            </div>

            <div className="form-group">
              <div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>

            <div class="col-auto">
              <div class="form-check mb-2">
                <label class="form-check-label" for="rememberMe">
                  Remember me
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
              </div>
            </div>
          </form>
          <hr />
          <div>
            Don't have an account?
            <span className="register-link">
              <Link to="/register"> Register </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default LogIn;
