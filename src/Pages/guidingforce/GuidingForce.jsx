import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./guiding.css";
import Office1Img from "../../assets/images/office/office1.png";
import Office2Img from "../../assets/images/office/office2.jpg";
import ImgBanner from "../../assets/images/guiding/newImg2.png";





const GuidingForce = () => {
  return (
    <section className="guiding-page">

      {/* HERO */}
     <div className="guiding-hero text-center">
  <div className="container position-relative">
    <h1 className="guiding-title">Our Guiding Force</h1>
    <p className="guiding-subtitle">
      Leadership that shapes our vision, values, and future
    </p>

    {/* SIGNATURE */}
    <div className="hero-signature">
      {/* <span>— Mr. MK</span> */}
    </div>
  </div>
</div>

                {/* SECTION ------ 2 */}

        <section className="leadership-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          
          {/* CARD 1 */}
          <div className="col-md-6 col-lg-5">
            <Link to="/office-1" className="leader-card link-unstyled">
              <img
                src={Office1Img}
                alt="Office leadership feature"
                className="leader-img"
              />
              <div className="leader-info">
                <h4 className="leader-name">Guiding Force</h4>
                <p className="leader-role">Leadership Feature</p>
              </div>
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="col-md-6 col-lg-5">
            <Link to="/office-2" className="leader-card link-unstyled">
              <img
                src={Office2Img}
                alt="Executive leadership feature"
                className="leader-img"
              />
              <div className="leader-info darker">
                <h4 className="leader-name">Leadership Spotlight</h4>
                <p className="leader-role">
                  Executive Leadership Feature
                </p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>         


           



      
    </section>
  );
};

export default GuidingForce;
