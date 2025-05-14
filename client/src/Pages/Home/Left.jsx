import { Button, Container,Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";
import logo from '../../assets/logo.png'
import { FaBell } from "react-icons/fa";
const Left = () => {
  return (
    <div style={{ height: "100%" }}>
      <div style={{  position: "absolute", top: "1px" }}>
        <img
          src={logo}
          style={{
            height: "180px",
            width: "235px",
            position: "relative",
            top: "-22px",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          gap: "4pc",
          padding: "25px",
          borderEndEndRadius: "15px",
          borderStartEndRadius: "15px",
          marginTop: "9pc",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Button
          variant={"ghost"}
          // fontSize="3xl"
          fontSize="20px"
          color={"white"}
          _hover={{ color: "teal.400" }}
          justifyContent={"space-evenly"}
        >
          <IoIosHome />
          <Text>Home</Text>
        </Button>

        <Button
          variant={"ghost"}
          fontSize="20px"
          color={"white"}
          _hover={{ color: "teal.400" }}
          justifyContent={"space-around"}
        >
          <FaSearch />
          <Text>Search</Text>
        </Button>
        <Button
          variant={"ghost"}
          fontSize="20px"
          color={"white"}
          _hover={{ color: "teal.400" }}
          justifyContent={"space-evenly"}
        >
          <FaBell />
          <Text>Notifications</Text>
        </Button>
        <Button
          variant={"ghost"}
          fontSize="20px"
          color={"white"}
          _hover={{ color: "teal.400" }}
          justifyContent={"space-evenly"}
        >
          <FiMessageSquare />
          <Text>Messages</Text>
        </Button>

        <Button
          variant={"ghost"}
          fontSize="20px"
          color={"white"}
          _hover={{ color: "teal.400" }}
          justifyContent={"space-evenly"}
        >
          <CgProfile />
          <Text>Profile</Text>
        </Button>
        <Text color={"white"}>©Ping 2025</Text>
      </div>
    </div>
  );
}

export default Left
