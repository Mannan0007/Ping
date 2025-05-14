import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Box
        backgroundColor={"blue.100"}
        marginTop={"2pc"}
        padding={2}
              shadow="md"
              borderRadius={5}
      >
        <HStack justifyContent={'space-around'}>
          <Link>About us </Link>
          <Link>Privacy policy</Link>
        </HStack>
      </Box>
    </div>
  );
}

export default Footer
