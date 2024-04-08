import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/SoloPlan.css";

const AnthologyPlan = () => {
  return (
    <Layout>
      <div className="plan">
        <div className="plan-content">
          <h1>Your Anthology Publish Plans</h1>
          <p>
            Choose the perfect plan for your book and get expert guidance every
            step of the way.
          </p>
        </div>
        <div className="package">
          <div className="package-detail">
            <div className="package-icon"></div>
            <div className="package-content">
              <div className="package-head">
                <h1>Novelist Dream</h1>
                <h2>10/-</h2>
              </div>
              <div className="package-body">
                <p >Slots(50)</p>
                <p className="line">Hardcopy (ADD-ON)</p>
                <p>E-Certificate</p>
                <p className="line">Hardcopy Certificate (ADD-ON)</p>
                <p>Ebook</p>
                <p>Manuscript Designing</p>
                <p className="line">Manuscript Formatting</p>
                <p className="line">Manuscript Proof Reading</p>
                <p>Amazon Listing</p>
                <p className="line">Flipkart Listing</p>
                <p>ISBN</p>
                <p>Cover Design</p>
                <p>Royalty - 50%</p>
                <p className="line">Press Release</p>
                <p>Mockups</p>
                <p>Instagram Promotion (1 Day)</p>
                <p className="line">Facebook Promotion</p>
                <p className="line">Google Ads (ADD-ON)</p>
                <p>Author Interview Session</p>
                <p>Book on Website</p>
                <p className="line">Amazon Ads</p>
                <p>Pre Launch Poster (1)</p>
              </div>
              <div className="button-package">
                <Link to="/publish/antho/onboard">
                  <button>Select</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="package-detail">
            <div className="package-icon"></div>
            <div className="package-content">
              <div className="package-head">
                <h1>Manuscript Maven</h1>
                <h2>10/-</h2>
              </div>
              <div className="package-body">
                <p >Slots (100)</p>
                <p >Hardcopy (1)</p>
                <p>E-Certificate</p>
                <p>Hardcopy Certificate</p>
                <p>Ebook</p>
                <p>Manuscript Designing</p>
                <p className="line">Manuscript Formatting</p>
                <p>Manuscript Proof Reading</p>
                <p>Amazon Listing</p>
                <p className="line">Flipkart Listing</p>
                <p>ISBN</p>
                <p>Cover Design</p>
                <p>Royalty - 70%</p>
                <p className="line">Press Release</p>
                <p>Mockups(2)</p>
                <p>Instagram Promotion (1 Day)</p>
                <p>Facebook Promotion(1 Day)</p>
                <p className="line">Google Ads</p>
                <p>Author Interview Session</p>
                <p>Book on Website</p>
                <p className="line">Amazon Ads</p>
                <p>Pre Launch Poster (1)</p>
              </div>
              <div className="button-package">
                <Link to="/publish/antho/onboard">
                  <button>Select</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="package-detail">
            <div className="package-icon"></div>
            <div className="package-content">
              <div className="package-head">
                <h1>Wordsmith's Odyssey</h1>
                <h2>20/-</h2>
              </div>
              <div className="package-body">
                <p >Slots(25)</p>
                <p >Hardcopy (3)</p>
                <p>E-Certificate</p>
                <p>Hardcopy Certificate</p>
                <p>Ebook</p>
                <p>Manuscript Designing</p>
                <p>Manuscript Formatting(1 time)</p>
                <p>Manuscript Proof Reading</p>
                <p>Amazon Listing</p>
                <p>Flipkart Listing</p>
                <p>ISBN</p>
                <p>Cover Design</p>
                <p>Royalty - 100%</p>
                <p >Press Release</p>
                <p>Mockups(3)</p>
                <p>Instagram Promotion (1 Day)</p>
                <p>Facebook Promotion(2 Day)</p>
                <p className="line">Google Ads</p>
                <p>Author Interview Session</p>
                <p>Book on Website</p>
                <p>Amazon Ads(1 Day)</p>
                <p>Pre Launch Poster (2)</p>
              </div>
              <div className="button-package">
                <Link to="/publish/antho/onboard">
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

export default AnthologyPlan;
