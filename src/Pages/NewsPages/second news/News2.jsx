import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import EVCharge from "../../../assets/images/News/evcharge.jpeg";
import "./News2.css";

const News2 = () => {
  return (
    <>
      <section className="IBM-font">


        {/* HERO SECTION */}
        <section className="press-hero">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="press-wrapper">
                  <h1 className="press-title">
                    Ponsana David to speak at EVCharge Live Thailand 2026 – driving conversation on EV charging and sustainable mobility
                  </h1>

                  <div className="press-meta">
                    <span>Published: 28–29 January 2026</span>
                  </div>

                    <p className="press-desc">
                      Ponsana David, Chairperson of the Green Carpet Foundation and CEO of TGPS Global, has been invited as a featured speaker at EVCharge Live Thailand 2026. The two-day forum at BITEC, Bangkok brings together the region's leading voices on electric mobility and charging infrastructure.
                    </p>

                  <div className="press-image">
                    <img src={EVCharge} alt="EVCharge Live Thailand 2026 event visual" />
                  </div>

                  <div className="press-content">
                    <p>
                      EVCharge Live Thailand 2026 convenes the full EV ecosystem—from policymakers and grid operators to technology providers and investors—to address the rapid evolution of charging infrastructure. Discussions focus on how reliable, scalable charging unlocks broader EV adoption across Thailand and the ASEAN region.
                    </p>

                    <p>
                      Across two days, delegates will join interactive sessions, expert talks, product demos, and hands-on exhibits that dive into fast-charging tech, fleet and battery management, data platforms, business models, investment strategies, last-mile logistics, regulatory frameworks, and energy integration and maintenance.
                    </p>

                    <p>
                      Ponsana David joins a global lineup of industry leaders to share perspectives on sustainable mobility, infrastructure development, and the power of multi-sector collaboration to build resilient, equitable transportation systems. Her participation underscores the Green Carpet Foundation's commitment to responsible innovation and partnerships that accelerate green technology adoption.
                    </p>

                    <p>
                      With more than 150 expert speakers, EVCharge Live Thailand offers a platform to explore next-generation EV charging innovations, forge strategic dialogues, and shape the integration of future-ready solutions that meet the region's fast-growing demand.
                    </p>

                    <p>
                      As Thailand expands its EV ecosystem—supported by public policy and private investment—forums like EVCharge Live Thailand are essential for sharing knowledge, highlighting emerging trends, and catalyzing collaboration across borders and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default News2;
