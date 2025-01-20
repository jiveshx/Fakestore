// import React from "react";
import "../App.css";
import test1 from "../assets/test1.png";

function Testimonials() {
  return (
    <div>
      <section className="py-3 mb-5 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className="fs-5 mb-2 text-warning text-uppercase">
                Testimonials
              </h3>
              <h2 className="display-5 mb-4">
                Our valued clients&apos; testimonials speak volumes about our
                work&apos;s power.
              </h2>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-3 gy-lg-4">
            <div className="col-12 col-lg-6">
              <div className="card">
                <div className="card-body p-4 p-xxl-5">
                  <div
                    className="bsb-ratings text-warning mb-3"
                    data-bsb-star="5"
                    data-bsb-star-off="0"
                  ></div>
                  <blockquote className="bsb-blockquote-icon mb-3">
                    We were so impressed with the work they did for us...
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <img
                      className="img-fluid rounded rounded-circle m-0 border border-5"
                      width="50"
                      height="50"
                      loading="lazy"
                      src={test1}
                      alt="Luna John"
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Luna John</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Business owner
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card">
                <div className="card-body p-4 p-xxl-5">
                  <div
                    className="bsb-ratings text-warning mb-3"
                    data-bsb-star="5"
                    data-bsb-star-off="0"
                  ></div>
                  <blockquote className="bsb-blockquote-icon mb-3">
                    We were so impressed with the work they did for us...
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <img
                      className="img-fluid rounded rounded-circle m-0 border border-5"
                      width="50"
                      height="50"
                      loading="lazy"
                      src={test1}
                      alt="Luna John"
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Luna John</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Business owner
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card">
                <div className="card-body p-4 p-xxl-5">
                  <div
                    className="bsb-ratings text-warning mb-3"
                    data-bsb-star="5"
                    data-bsb-star-off="0"
                  ></div>
                  <blockquote className="bsb-blockquote-icon mb-3">
                    We were so impressed with the work they did for us...
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <img
                      className="img-fluid rounded rounded-circle m-0 border border-5"
                      width="50"
                      height="50"
                      loading="lazy"
                      src={test1}
                      alt="Luna John"
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Luna John</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Business owner
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card">
                <div className="card-body p-4 p-xxl-5">
                  <div
                    className="bsb-ratings text-warning mb-3"
                    data-bsb-star="5"
                    data-bsb-star-off="0"
                  ></div>
                  <blockquote className="bsb-blockquote-icon mb-3">
                    We were so impressed with the work they did for us...
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <img
                      className="img-fluid rounded rounded-circle m-0 border border-5"
                      width="50"
                      height="50"
                      loading="lazy"
                      src={test1}
                      alt="Luna John"
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Luna John</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Business owner
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
