import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark footer">
      <div className="footer-top py-8">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-8 pe-xxl-10">
              <div className="row gy-5 d-flex flex-column">
                <div className="col-6 col-lg-4">
                  <h5 className="text-white footer-title-01">A propos</h5>
                  <ul className="list-unstyled footer-link-01 m-0">
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Our ingredients
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Our resellers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-4">
                  <h5 className="text-white footer-title-01">About</h5>
                  <ul className="list-unstyled footer-link-01 m-0">
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Customer Service
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-4">
                  <h5 className="text-white footer-title-01">Need Help?</h5>
                  <ul className="list-unstyled footer-link-01 m-0">
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Offers &amp; Kits
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Get the app
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-opacity-75" href="#">
                        Store locator
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="text-white footer-title-01 fs-5 px-2">
        Subscribe to our newsletter and get 15% off your next order.
      </h5>
      <div className="px-2">
        <form className="d-flex flex-row mb-2 p-1 bg-white input-group">
          <input
            type="email"
            className="form-control rounded border-0"
            placeholder="Your Email"
          />{" "}
          <button className="btn btn-secondary flex-shrink-0" type="submit">
            Subscribe
          </button>
        </form>
        <p className="fs-sm text-white text-opacity-75 mb-5">
          I agree to receive Absolution newsletters
        </p>
      </div>
      <div className="footer-bottom small py-3 border-top border-white border-opacity-10">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start py-1">
              <p className="m-0 text-white text-opacity-75">
                © 2024 copyright by{" "}
                <a className="text-reset" href="#">
                  DesignRex
                </a>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end py-1">
              <ul className="nav justify-content-center justify-content-md-end list-unstyled footer-link-01 m-0">
                <li className="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#" className="text-white text-opacity-75">
                    Privace &amp; Policy
                  </a>
                </li>
                <li className="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#" className="text-white text-opacity-75">
                    Faq's
                  </a>
                </li>
                <li className="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#" className="text-white text-opacity-75">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
