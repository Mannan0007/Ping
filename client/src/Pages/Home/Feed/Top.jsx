import React, { useState } from "react";
import { Box, Button, HStack, Textarea, VStack, useToast } from "@chakra-ui/react";
import { FaImages } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

const Top = () => {
  const [post, setPost] = useState("");
  const toast = useToast();

  const handlePost = () => {
    if (!post.trim()) {
      toast({
        title: "Post cannot be empty.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    // Add your post logic here (e.g., send to backend)
    console.log("Posted:", post);
    toast({
      title: "Post shared!",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });

    setPost("");
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      shadow="md"
      bg="white"
      width={"63pc"}
      marginLeft={"46px"}
    >
      <VStack spacing={3}>
        <Textarea
          placeholder="What's on your mind?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          backgroundColor={"white"}
        />
        <HStack display={"flex"}>
          <Button colorScheme="green">Add a Picture</Button>
          <Button colorScheme="blue" onClick={handlePost}>
            Post
          </Button>
          <Button colorScheme="red" >
            <IoTrashBinSharp/>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Top;
