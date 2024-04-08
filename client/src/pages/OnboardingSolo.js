import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OnboardingSolo.css';
import Layout from '../components/Layout/Layout';
import toast from 'react-hot-toast';


function OnboardingSolo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [packagee, setPackagee] = useState('');
  const [language, setLanguage] = useState('English');
  const [genre, setGenre] = useState('Fiction');
  const [manuscriptStatus, setManuscriptStatus] = useState('Complete');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('packagee', packagee);
    formData.append('language', language);
    formData.append('genre', genre);
    formData.append('manuscriptStatus', manuscriptStatus);
    formData.append('file', file);

    try {
      await axios.post("/api/v1/onboard/create-solo", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Form submitted successfully!');
      setName("");
      setEmail("");
      setPhone("");
      setFile(null);

    } catch (error) {
      console.error('Error submitting form:', error);
     toast.error('Error submitting form. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="onboard">
        <div className="plan-contentt">
          <h1>Solo Onboarding</h1>
          <p>Submit Your details</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Selected Package</label>
            <select value={packagee} onChange={(e) => setPackagee(e.target.value)}>
              <option value="Starter (₹999)">Starter (₹999)</option>
              <option value="Premium (₹1999)">Premium (₹1999)</option>
              <option value="Deluxe (₹2999)">Deluxe (₹2999)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Language</label>
            <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Select Genre</label>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="Fiction">Fiction</option>
              <option value="Biography">Biography</option>
              <option value="Business">Business</option>
              <option value="Poetry">Poetry</option>
              <option value="Self Help">Self Help</option>
            </select>
          </div>
          <div className="form-group">
            <label>Manuscript Status</label>
            <select value={manuscriptStatus} onChange={(e) => setManuscriptStatus(e.target.value)}>
              <option value="Complete">Complete</option>
              <option value="In Progress">In Progress</option>
              <option value="Not Started">Not Started</option>
            </select>
          </div>
          <div className="form-group">
            <label>Upload file</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default OnboardingSolo;
