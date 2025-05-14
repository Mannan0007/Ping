import React from 'react'
import {
  Avatar,
  Badge,
  Box,
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const People = () => {
  return (
    <div>
      <div style={{ margin: "12px" }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={"12px"}
          gap={"12px"}
          background={"gray.100"}
          borderRadius={"2xl"}
          marginBottom={"1pc"}
          shadow="md"
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            People you may know
          </Text>
          <VStack align={"stretch"}>
            <HStack
              justify={"space-between"}
              _hover={{ bg: "gray.200", cursor: "pointer" }}
            >
              <HStack>
                <Avatar
                  name="mauu"
                  src="https://mannanpuri.vercel.app/assets/mannan_dp-removebg-preview-e158ece6.png"
                />
                <Text>Mauu</Text>
              </HStack>
              <Badge colorScheme="blue">Follow</Badge>
            </HStack>

            <HStack
              justify={"space-between"}
              _hover={{ bg: "gray.200", cursor: "pointer" }}
            >
              <HStack>
                <Avatar
                  name="Joey"
                  src="https://i.pinimg.com/236x/a5/2a/43/a52a4386d2b60972e2c6ef15e0548017.jpg"
                />
                <Text>Joey</Text>
              </HStack>
              <Badge colorScheme="blue">Follow</Badge>
            </HStack>
            <HStack
              justify={"space-between"}
              _hover={{ bg: "gray.200", cursor: "pointer" }}
            >
              <HStack>
                <Avatar
                  name="chandler"
                  src="https://www.rollingstone.com/wp-content/uploads/2023/10/chandler-bing-matthew-perry-moments.jpg?w=1581&h=1054&crop=1"
                />
                <Text>Chandler</Text>
              </HStack>
              <Badge colorScheme="blue">Follow</Badge>
            </HStack>
          </VStack>
        </Box>
      </div>
    </div>
  );
}

export default People;
