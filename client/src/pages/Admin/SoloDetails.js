import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";

const SolosDetails = () => {
  const [onboardingSolos, setOnboardingSolos] = useState([]);

  useEffect(() => {
    const fetchOnboardingSolos = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/onboard/get-solo`);
        setOnboardingSolos(data);
      } catch (error) {
        console.error("Error fetching onboarding solos:", error);
      }
    };

    fetchOnboardingSolos();
  }, []);

  const downloadFile = async (fileData, fileName) => {
    try {
      const url = window.URL.createObjectURL(new Blob([fileData]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${fileName}.pdf`); // Set download file name with .pdf extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Onboarding Solos</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Package</th>
                  <th scope="col">Language</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Manuscript Status</th>
                  <th scope="col">Download File</th>
                </tr>
              </thead>
              <tbody>
                {onboardingSolos.map((solo) => (
                  <tr key={solo._id}>
                    <td>{solo.name}</td>
                    <td>{solo.email}</td>
                    <td>{solo.phone}</td>
                    <td>{solo.packagee}</td>
                    <td>{solo.language}</td>
                    <td>{solo.genre}</td>
                    <td>{solo.manuscriptStatus}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => downloadFile(solo.file.data, solo.name)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolosDetails;
