import React,{ useState } from 'react'
import './App.css'
import Login from './Pages/Auth/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './Pages/Auth/Register'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import Home from './Pages/Home/Home'
import ProtectedRoute from './components/Protected'
import OtpPage from './Pages/Auth/Otp'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path='/verify' element={<OtpPage/>} /> 
          <Route path="/resetpassword" element={<ForgotPassword />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App
