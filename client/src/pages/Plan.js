import Layout from "./../components/Layout/Layout";
import React from "react";
import "../styles/Plan.css";
import { Link } from "react-router-dom";
const Plan = () => {
  return (
    <Layout>
      <div className="plan">
        <div className="plan-content">
          <h1>Start Your journey with us</h1>
          <h1>Select your desired package</h1>
        </div>
        <div className="package">
          <div className="package-detail">
            <div className="package-icon"></div>
            <div className="package-content">
              <div className="package-head">Solo</div>
              <div className="package-body">
                Unleash the power of your individual voice with our Solo
                Package! Aspiring authors, this is your opportunity to shape
                your narrative, craft your story, and bring your vision to life
                independently. With full creative control, you are the sole
                maestro of your literary masterpiece. Dive into the world of
                storytelling on your terms, where every word is a reflection of
                your unique brilliance. Embrace the solo journey, and let your
                story shine!
              </div>
              <div className="button-package">
                <Link to = "/publish/solo">
                    <button>Select</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="package-detail">
            <div className="package-icon"></div>
            <div className="package-content">
              <div className="package-head">Anthology</div>
              <div className="package-body">
                Elevate your writing experience with our Anthology Package –
                where collaboration meets creativity! Join forces with a
                dedicated team of professionals who share your passion for
                storytelling.Together, we'll weave your narrative into a
                tapestry of excellence, ensuring every detail is polished to
                perfection. The Anthology Package is more than a service; it's a
                literary partnership that transforms your vision into a
                collaborative masterpiece!
              </div>
              <div className="button-package">
                <Link to = "/publish/anthology">
                    <button>Select</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Plan;
