// import React from "react";
import "../App.css";
import aboutImg1 from "../assets/aboutimg1.png";
import aboutImg2 from "../assets/aboutimg2.png";

function InfoSection() {
  return (
    <div>
      <section id="about" className="why-choose-us mt-4">
        <div className="container d-flex">
          <div className="row align-items-center">
            <div className="col-md-4 p-0">
              <img
                src={aboutImg1}
                alt="About"
                className="rounded img-fluid"
                style={{ height: "438px" }}
              />
            </div>
            <div className="col-md-8 p-0" id="card-lines">
              <div
                className="card"
                style={{ width: "100%", height: "100%" }}
                id="why-card"
              >
                <div
                  className="card-body p-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                  }}
                >
                  <h6 className="card-subtitle mb-2 text-warning">
                    Why choose us?
                  </h6>
                  <h1 className="card-title fs-1">
                    We are professional E-Commerce platform
                  </h1>
                  <p className="card-text">
                    At Xpresship, we are dedicated to delivering reliable,
                    efficient, and seamless logistics solutions tailored to your
                    business needs. Here’s why partnering with Xpresship can
                    drive your success: Dependable and On-Time Deliveries With
                    our commitment to precision, we ensure your shipments reach
                    their destinations on schedule. Our robust network and
                    advanced tracking technology allow us to uphold our promise
                    of punctuality and reliability. Comprehensive Logistics
                    Services From warehousing to last-mile delivery, Xpresship
                    covers every step of the logistics process. We provide
                    end-to-end solutions, enabling you to focus on your core
                    business while we handle your logistics seamlessly.
                    Customer-Centric Approach Our team is dedicated to
                    understanding your unique requirements and delivering
                    solutions that are tailored to your needs. With Xpresship,
                    you’re not just another customer – you’re a valued partner.
                    Cutting-Edge Technology We use the latest logistics
                    technology to track, manage, and optimize your shipments,
                    giving you visibility at every stage of the delivery
                    process. Our tech-forward approach ensures efficiency and
                    transparency.
                  </p>
                  <div className="action-btns d-flex gap-2">
                    <button className="btn btn-dark" type="button">
                      Learn more
                    </button>
                    <button className="btn btn-warning" type="button">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="reach" className="world" style={{ marginTop: "40px" }}>
        <div className="container d-flex">
          <div className="row align-items-center" id="about-cont">
            <div className="col-md-6">
              <div className="container">
                <h6 className="card-subtitle mb-2 text-warning">
                  Our partners
                </h6>
                <h5 className="card-title fs-1 mb-2">
                  Over 150+ partners locations in the world
                </h5>
                <p className="card-text">
                  At Xpresship, we provide seamless, reliable, and global
                  logistics solutions tailored to meet your unique business
                  needs. Here’s why partnering with Xpresship makes a
                  difference: Global Reach with Local Expertise Through our
                  extensive network of trusted worldwide partners, Xpresship
                  offers seamless logistics solutions across continents. Our
                  established relationships with international carriers and
                  local providers ensure smooth deliveries, no matter where your
                  business takes you. Dependable and On-Time Deliveries We’re
                  committed to precision and reliability. With Xpresship, your
                  shipments are always on schedule, thanks to our strong network
                  and state-of-the-art tracking systems that keep your business
                  moving forward.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={aboutImg2} alt="Partners" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;
