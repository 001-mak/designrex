import React from "react";
import "./styles/login.css";

function Login() {
  return (
    <>
      <div className="page-container m-0 px-5 row">
        <div className="login-card-container col-lg-6 p-md-5 ">
          <div className="login-card p-md-5 m-md-5 bg-light">
            <div className="card-heading">
              <h1>Login</h1>
              <div>
                <p>New User? Create an account</p>
              </div>
            </div>
            <div className="login-form">
              <form class="row g-3">
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-12">
                  <label for="inputPassword4" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 right d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <img src="../../logo.png" alt="" />
            <h1>DesignRex</h1>
          </div>
          <div>
            <p className="ms-3">Sign in or create an account</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
