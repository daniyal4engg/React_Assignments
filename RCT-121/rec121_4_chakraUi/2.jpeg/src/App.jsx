import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Container,
  Center,
  SimpleGrid,
  Grid,
  GridItem,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Box>
        <Text>Desktop Layout</Text>
      </Box>
      <Center>
        <Box>
          <Grid
            color={"white"}
            mt="50px"
            w={["200px", "500px"]}
            h="200px"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={[1, 2]} colSpan={[3, 2]} bg="mediumpurple" />
            <GridItem rowSpan={[1, 3]} colSpan={[3, 1]} bg="tomato" />
            <GridItem rowSpan={[1, 1]} colSpan={[3, 2]} bg="lightskyblue" />
          </Grid>
        </Box>
      </Center>
    </div>
  );
}

export default App;
