// src/pages/OtpPage.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(""); // Or you can pass it via props/state
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/verify-otp", { email, otp });

      if (res.data.success) {
        alert("OTP verified successfully!");
        navigate("/login"); // or home/dashboard
      } else {
        setError("Invalid OTP. Try again!");
      }
    } catch (err) {
      setError("Verification failed. Please try again.");
    }
  };

  return (
    <div className="otp-page">
      <h2>Verify Your OTP</h2>
      <form onSubmit={handleVerify}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default OtpPage;
