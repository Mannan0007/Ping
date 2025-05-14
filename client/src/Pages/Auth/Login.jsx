import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Button, Input, useToast,FormControl,FormLabel, InputRightElement, InputGroup, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  const toast = useToast();
  const navigate = useNavigate();

  //show hide password 
  const handleShowClick = () => {
    setShowPassword(!showPassword);
  }
  
  const HandleLogin = async () => {
    setLoading(true);
    if (!email || !password) {

      toast({
        title: "Please enter all the fiedls",
        status: "warning",
        isClosable: true,
        duration: 5000,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(
        `http://localhost:9000/api/user/login`,

        {
          email,
          password,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Save token separately
      localStorage.setItem("userToken", data.token);

      // ✅ Now this will not be null
      console.log(localStorage.getItem("userToken"));

      toast({
        title: "Login successfull",
        status: "success",
        isClosable: true,
        position: "bottom",
        duration: 5000,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      // console.log(error)
    } finally {
      setLoading(false);
    }
  };



  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
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
          bottom: "240px",
          padding: "2pc",
          border:'3px solid black',
          borderRadius: "12px",
        }}
      >
        <FormControl isRequired>
          <FormLabel>Enter your email</FormLabel>
          <Input
            type="email"
            style={{ color: "black", fontSize: "17px", background: "white" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />

          <FormLabel>Enter your password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              style={{ color: "black", background: "white" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <InputRightElement>
              <Button
                variant="ghost"
                onClick={handleShowClick}
                h="1.95rem"
                size="sm"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye fontSize="2xl" style={{}} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          style={{
            marginTop: "12px",
            display: "flex",
            justifySelf: "center",
          }}
          onClick={HandleLogin}
        >
          Log in
        </Button>
        <div style={{display:'flex',justifyContent:'space-between'}}>

        <Link to={'/signup'}><Text>Register here</Text></Link>
        <Link to={'/resetpassword'}><Text>Forgot password</Text></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
