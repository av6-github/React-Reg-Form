import React, { useState } from "react";
import logo from './logo.svg'; // Replace with your actual QR code image if available
import './App.css';
import axios from "axios";

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    college: '',
    deptAndYr: '',
    gender: '',
    paymentId: ''
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Submitted:", values);
    // You can add further form submission logic here

    try {
      await axios.post("http://localhost:5000/responses", values);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <h1 className="title">Registration Form</h1>
      <div className="content-wrapper">
        {/* Form Container */}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              onChange={handleChanges}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              onChange={handleChanges}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChanges}
              required
            />

            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              name="number"
              onChange={handleChanges}
              required
            />

            <label htmlFor="collegeName">College Name</label>
            <input
              type="text"
              placeholder="Enter College Name"
              name="college"
              onChange={handleChanges}
              required
            />

            <label htmlFor="deptAndYr">Dept. And Year</label>
            <input
              type="text"
              placeholder="Enter Dept. And Year"
              name="deptAndYr"
              onChange={handleChanges}
              required
            />

            <label>Gender</label>
            <div className="radio-group">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={handleChanges}
                required
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleChanges}
              />
              <label htmlFor="female">Female</label>

              <input
                type="radio"
                id="other"
                name="gender"
                value="Other"
                onChange={handleChanges}
              />
              <label htmlFor="other">Other</label>
            </div>

            <h2>Payment Confirmation</h2>
            <label htmlFor="paymentId">Transaction Id</label>
            <input
              type="text"
              placeholder="Enter Transaction Id"
              name="paymentId"
              onChange={handleChanges}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* QR Code Container */}
        <div className="qr-code-container">
          <h2>Scan QR for Payment</h2>
          <div className="qr-placeholder">
            <img src={logo} alt="QR Code" />
            {/* Replace 'logo' with your actual QR code image source if available */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
