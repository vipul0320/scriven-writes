

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OnboardingSolo.css';
import Layout from '../components/Layout/Layout';
import toast from 'react-hot-toast';


function OnboardingAntho() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [packagee, setPackagee] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/onboard/create-antho`, {
        name, email, phone, packagee,
      });
      if (data?.success) {
        toast.success(`form is submitted`);
       
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };

  return (
    <Layout>
      <div className="onboard">
        <div className="plan-contentt">
          <h1>Antho Onboarding</h1>
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
          
         
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default OnboardingAntho;
