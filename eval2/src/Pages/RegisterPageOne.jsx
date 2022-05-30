import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPageOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box
      border="1px solid black"
      margin="auto"
      textAlign="center"
      w="40%"
      p={5}
      mt={10}
    >
      <Text mb={5}> Registraion form - Page 1</Text>
      <Input
        mb={5}
        placeholder="enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></Input>
      <Input
        mb={5}
        placeholder="enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></Input>
      <Link to="/rpg2"> Next </Link>
    </Box>
  );
};
