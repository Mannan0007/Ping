import React from "react";
import {
  Box,
  VStack,
  Text,
  Avatar,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";

const Center = () => {
  const posts = [
    {
      id: 1,
      user: "Mauu",
      content: "What an Absolute Knock by the GOAT",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/11/AP23309444492856-1-1699187274.jpg?resize=1800%2C1200",
    },
    {
      id: 2,
      user: "Joey",
      content: "Hello from LA!",
      img: "https://i.etsystatic.com/32490225/r/il/085d1e/3472113217/il_570xN.3472113217_p3ap.jpg",
    },
    {
      id: 3,
      user: "Chandler",
      content: "Could this BE any more fun?",
      img: "https://media.tenor.com/MnA9dHk_wnYAAAAM/friends-friendstv.gif",
    },
  ];

  return (
    <VStack spacing={4} p={4} w="100%" align="center">
      {posts.map((post) => (
        <Box
          key={post.id}
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          w="100%"
          maxW="600px"
          bg="white"
          boxShadow="lg"
          _hover={{ boxShadow: "xl", transition: "all 0.3s ease-in-out" }}
        >
          <HStack spacing={3} mb={2}>
            <Avatar name={post.user} />
            <Text fontWeight="bold">{post.user}</Text>
          </HStack>

          {post.img && (
            <Box
              w="100%"
              h="300px"
              bg="gray.200"
              borderRadius="md"
              mb={3}
              overflow="hidden"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={post.img}
                alt={post.user}
                style={{
                  objectFit: "contain", // Avoids cropping by maintaining aspect ratio
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          )}

          <Text mb={3}>{post.content}</Text>
          <Divider my={2} />

          <HStack justify="space-between" align="center" w="100%">
            <Button
              variant="ghost"
              size="sm"
              colorScheme="blue"
              _hover={{ bg: "blue.50" }}
              _focus={{ outline: "none" }}
            >
              Like
            </Button>
            <Button
              variant="ghost"
              size="sm"
              colorScheme="blue"
              _hover={{ bg: "blue.50" }}
              _focus={{ outline: "none" }}
            >
              Comment
            </Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};
export default Center;
