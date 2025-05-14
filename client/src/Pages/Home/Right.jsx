import { Avatar, AvatarBadge, Badge, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack,useToast } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Trending from './RightSide/Trending';
import People from './RightSide/People';
import { IoIosMore } from "react-icons/io";
import Footer from './RightSide/Footer';

const Right = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

 const handleLogout = () => {
   setIsModalOpen(true); // Show modal
 };

 const confirmLogout = () => {
   localStorage.removeItem("userInfo");
   localStorage.removeItem("userToken");
   navigate("/login");
   setIsModalOpen(false); // Close modal

   toast({
     title: "Successfully logged out",
     description: "You have been logged out from your account.",
     status: "success",
     duration: 5000,
     isClosable: true,
     position: "bottom",
   });
  };
  
  const cancelLogout = () => {
    setIsModalOpen(false); // Close modal if cancel is clicked
  };
  return (
    <div>
      <Box
        style={{ margin: "20px", display: "flex", justifyContent: "flex-end" }}
      >
        <Menu>
          <MenuButton>
            <IoIosMore style={{ fontSize: "25px" }} />
          </MenuButton>
          <MenuList padding={2}>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Contact us</MenuItem>
            <MenuItem
              _hover={{ backgroundColor: "#f0f0f0" }}
              onClick={handleLogout}
              color="red.500"
            >
              Logout
            </MenuItem>{" "}
          </MenuList>
        </Menu>

        {/* Logout Modal */}
        <Modal isOpen={isModalOpen} onClose={cancelLogout}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Logout Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure you want to log out?</ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={cancelLogout} mr={3}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmLogout}>
                Logout
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <div style={{ margin: "12px" }}>
        <div>
          <People />
        </div>
        <div>
          <Trending />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Right
