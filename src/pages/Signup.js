import React from 'react'
import './styles/auth.css'

function Signup() {
  return (
    <>
      <div className="page-container m-0 px-5 row">
        <div className="auth-card-container col-lg-6 p-md-2">
          <div className="auth-card p-md-5 m-md-5">
            <div className="card-heading">
              <h1>Sign Up</h1>
              <div>
                <p>Already have an account? Login</p>
              </div>
            </div>
            <div className="auth-form">
              <form class="row g-3">
                <div class="col-md-12">
                  <label for="firstName" class="form-label">
                    First Name
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-12">
                  <label for="lastName" class="form-label">
                    Last Name
                  </label>
                  <input type="text" class="form-control"/>
                </div>
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
                    Sign up
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
  )
}

export default Signup
