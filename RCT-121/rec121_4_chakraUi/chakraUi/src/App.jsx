import { useState } from "react";
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
import "./App.css";

function App() {
  const [orangToRed, setOrangeToRed] = "orange";
  const [redToOrange, setRedToOrange] = "red";
  return (
    <div className="App">
      <Text>Desktop Layout</Text>
      <Center>
        <Grid
          w={["400px", "800px"]}
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(4, 1fr)"
          gap={1}
        >
          <GridItem
            rowSpan={[1, 4]}
            colSpan={[4, 1]}
            h="10"
            bg="blue"
            p="10px"
            textAlign={"center"}
          >
            Nav
          </GridItem>
          <GridItem
            rowSpan={[1, 4]}
            colSpan={[4, 2]}
            h="10"
            bg="orange"
            p="10px"
            textAlign={"center"}
          >
            Content
          </GridItem>
          <GridItem
            rowSpan={[1, 4]}
            colSpan={[4, 1]}
            h="10"
            bg="red"
            p="10px"
            textAlign={"center"}
          >
            Widget
          </GridItem>
        </Grid>
      </Center>
    </div>
  );
}

export default App;

// <Grid
// h="200px"
// templateRows="repeat(2, 1fr)"
// templateColumns="repeat(3, 1fr)"
// gap={1}
// >
// <GridItem rowSpan={2} colSpan={1} bg={["tomato", "steelblue"]}>
//   Nav
// </GridItem>
// <GridItem rowSpan={2} colSpan={1} bg={["orange"]}>
//   content
// </GridItem>
// <GridItem rowSpan={2} colSpan={1} bg={["red"]}>
//   widget
// </GridItem>
// </Grid>

// <Stack direction={["row", "Column"]}>
// // <Box bg={["steelblue"]}>1</Box>
// // <Box bg={["orange"]}>2</Box>
// // <Box bg={["red"]}>3</Box>
// </Stack>

// <Box>
// <Grid
//   mt="50px"
//   w={["200px", "500px"]}
//   h="200px"
//   templateRows="repeat(3, 1fr)"
//   templateColumns="repeat(3, 1fr)"
//   gap={4}
// >
//   <GridItem rowSpan={[1, 2]} colSpan={[3, 2]} bg="mediumpurple" />
//   <GridItem rowSpan={[1, 3]} colSpan={[3, 1]} bg="tomato" />
//   <GridItem rowSpan={[1, 1]} colSpan={[3, 2]} bg="lightskyblue" />
// </Grid>
// </Box>
