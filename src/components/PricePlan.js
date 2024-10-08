import React from "react";
import './styles/priceplan.css'

function PricePlan() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.lineicons.com/3.0/lineicons.css" />
      <section className="price_plan_area section_padding_130_80" id="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-12 py-2">
              {/* Section Heading*/}
              <div className="section-heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                <h3>Pricing Plans</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Single Price Plan Area*/}
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="single_price_plan wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                <div className="title">
                  <h3>Start Up</h3>
                  <p>Start a trial</p>
                  <div className="line"></div>
                </div>
                <div className="price">
                  <h4>$0</h4>
                </div>
                <div className="description">
                  <p><i className="lni lni-checkmark-circle"></i>Duration: 7days</p>
                  <p><i className="lni lni-checkmark-circle"></i>10 Features</p>
                  <p><i className="lni lni-close"></i>No Hidden Fees</p>
                  <p><i className="lni lni-close"></i>1000+ Templates</p>
                  <p><i className="lni lni-close"></i>Ai Image Generation</p>
                </div>
                <div className="button"><a className="btn btn-success btn-2" href="#">Get Started</a></div>
              </div>
            </div>
            {/* Single Price Plan Area*/}
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="single_price_plan active wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                {/* Side Shape*/}
                <div className="side-shape"><img src="https://bootdey.com/img/popular-pricing.png" alt="" /></div>
                <div className="title"><span>Popular</span>
                  <h3>Team</h3>
                  <p>For Teams</p>
                  <div className="line"></div>
                </div>
                <div className="price">
                  <h4>$9.99</h4>
                </div>
                <div className="description">
                  <p><i className="lni lni-checkmark-circle"></i>Duration: 3 Month</p>
                  <p><i className="lni lni-checkmark-circle"></i>50 Features</p>
                  <p><i className="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                  <p><i className="lni lni-checkmark-circle"></i>1500+ Templates</p>
                  <p><i className="lni lni-close"></i>Ai Tools</p>
                </div>
                <div className="button"><a className="btn btn-warning" href="#">Get Started</a></div>
              </div>
            </div>
            {/* Single Price Plan Area*/}
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="single_price_plan wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                <div className="title">
                  <h3>Enterprise</h3>
                  <p>Unlimited Possibilities</p>
                  <div className="line"></div>
                </div>
                <div className="price">
                  <h4>$49.99</h4>
                </div>
                <div className="description">
                  <p><i className="lni lni-checkmark-circle"></i>Duration: 1 year</p>
                  <p><i className="lni lni-checkmark-circle"></i>Unlimited Features</p>
                  <p><i className="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                  <p><i className="lni lni-checkmark-circle"></i>Unlimited Templates</p>
                  <p><i className="lni lni-checkmark-circle"></i>Ai Tools</p>
                </div>
                <div className="button"><a className="btn btn-info" href="#">Get Started</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricePlan;
