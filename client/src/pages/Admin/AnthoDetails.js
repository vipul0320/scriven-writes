import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const AnthoDetails = () => {
  const [onboardingAnthos, setOnboardingAnthos] = useState([]);

  const fetchOnboardingAnthos = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/onboard/get-antho`);
      setOnboardingAnthos(response.data);
    } catch (error) {
      console.error("Error fetching onboarding anthos:", error);
    }
  };

  useEffect(() => {
    fetchOnboardingAnthos();
  }, []);

  return (

    <Layout title={"Antho Details"}>
    <div className="container-fluid m-22 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Antho Details</h1>
          {onboardingAnthos.map((antho) => (
             <div className="card m-2" style={{ width: "18rem" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{antho.name}</h5>
                <p className="card-text">Email: {antho.email}</p>
                <p className="card-text">Phone: {antho.phone}</p>
                <p className="card-text">Package: {antho.packagee}</p>
               
               
              </div>
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default AnthoDetails;
