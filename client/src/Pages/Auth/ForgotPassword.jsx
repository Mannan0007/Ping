import { border, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/logo.png";

const ForgotPassword = () => {
  return (
    <div style={{
      minHeight: '100vh',
      // justifyContent: 'center',
      // alignItems:'center'
    }}>

        <img
        src={logo}
              style={{ position: "relative", bottom: "-6pc", right: "-2pc" }}
      />
      
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyItems: "center",
                justifyContent: "center",
                width: "45%",
              }}
            >
              <h1 style={{ color: "black", fontSize: "30px", fontFamily: "cursive" }}>
                Where Moments Become Memories.
              </h1>
            </div>
      
      <div style={{
        width: '40%', border: '3px solid black', padding
        :'20px',borderRadius:'12px',position:'absolute',right:'1pc',top:'10pc'
       }} >
        <FormControl isRequired>
          <FormLabel>Enter your email</FormLabel>
          <Input type='email' placeholder='Enter your email....'/>
          <FormLabel>Submit OTP</FormLabel>
          <Input type='number' placeholder='OTP....'/>
        <Button style={{display:'flex',justifyContent:'center',justifySelf:'center',marginTop:'1pc'}}>Submit</Button>
        </FormControl> 
      </div>
    </div>
  )
}

export default ForgotPassword
