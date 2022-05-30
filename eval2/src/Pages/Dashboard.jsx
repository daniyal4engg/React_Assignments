import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Box
      border="1px solid black"
      margin="auto"
      textAlign="center"
      mt={10}
      w="40%"
      p={4}
    >
      <Flex>
        <Box
          border="1px solid black"
          textAlign="center"
          m={10}
          w="40%"
          p={4}
        ></Box>
        <Box border="1px solid black" textAlign="center" m={10} w="70%" p={5}>
          <Link to="/rpg1"> go to Register</Link>
        </Box>
      </Flex>
    </Box>
  );
};
