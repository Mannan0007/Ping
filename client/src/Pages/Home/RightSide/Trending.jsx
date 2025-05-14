import React from "react";
import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react";

const trendingTopics = [
  { topic: "#IPL", posts: "12.3K posts" },
  { topic: "#Trump", posts: "9.7K posts" },
  { topic: "#Tariff", posts: "6.1K posts" },
  { topic: "#StockMarket", posts: "4.2K posts" },
];

const Trending = () => {
  return (
    <Box p={4} bg="gray.100" borderRadius="md" shadow="md" w="100%">
      <Text fontSize="xl" fontWeight="bold" mb={3}>
         Trending Topics
      </Text>
      <VStack align="stretch" spacing={3}>
        {trendingTopics.map((item, index) => (
          <HStack
            key={index}
            justify="space-between"
            p={3}
            bg="white"
            borderRadius="md"
            _hover={{ bg: "gray.200", cursor: "pointer" }}
            transition="0.2s"
          >
            <Text fontWeight="medium">{item.topic}</Text>
            <Badge colorScheme="blue">{item.posts}</Badge>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Trending;
