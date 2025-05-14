import { Box, Button, FormControl, FormLabel, Input,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
const Register = () => {


    const [loading, setLoading] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();
    const [showpassword, setShowPassword] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleShowClick = () => {
    setShowPassword(!showpassword);

  };

  const handleRegister = async () => {
    setLoading(true);
    if (!email || !username || !name || !password || !confirmPassword) {
      toast({
        title: "Please fill all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(
        `http://localhost:9000/api/user/register`,
        {
          email,
          password,
          name,
          username,
        }
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      toast({
        title: "User successfully created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Some error occured",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }

  return (
    <div style={{ minHeight: "100vh" }}>
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

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          position: "absolute",
          right: "10px",
          bottom: "10pc",
          padding: "2pc",
          border: "3px solid black",
          borderRadius: "12px",
        }}
      >
        <FormControl isRequired>
          <FormLabel>Enter your name</FormLabel>
          <Input
            placeholder="Name"
            backgroundColor={"white"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Create a username</FormLabel>
          <Input
            placeholder="Username"
            backgroundColor={"white"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormLabel>Enter your email</FormLabel>
          <Input
            placeholder="Email"
            backgroundColor={"white"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Create a password</FormLabel>
          <Input
            placeholder="password...."
            backgroundColor={"white"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel>Confirm your password</FormLabel>
          <Input
            placeholder="password...."
            type="password"
            backgroundColor={"white"}
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button
          style={{ display: "flex", justifySelf: "center", marginTop: "1pc" }}
          onClick={handleRegister}
        >
          Sign Up
        </Button>
        <Link to={"/login"}>Already have an account?</Link>
      </div>
    </div>
  );
}

export default Register
