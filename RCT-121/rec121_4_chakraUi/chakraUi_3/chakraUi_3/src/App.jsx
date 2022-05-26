import { useState } from "react";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Center>
        <Grid
          size={["320px", "768px", "1024px"]}
          templateRows="repeat(7, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={2}
        >
          <GridItem
            w="100px"
            rowSpan={[1, 2, 2]}
            colSpan={[4, 2, 2]}
            h={["10", "20"]}
            bg="yellow"
          ></GridItem>
          <GridItem
            rowSpan={[1, 2, 2]}
            colSpan={[4, 2, 2]}
            w="100%"
            h={["10", "20"]}
            bg="yellow"
          ></GridItem>
          <GridItem
            rowSpan={[1, 1, 1]}
            colSpan={[4, 4, 4]}
            w="100%"
            h="10"
            bg="tomato"
          ></GridItem>
          <GridItem
            rowSpan={[1, 1, 2]}
            colSpan={[4, 4, 4]}
            w="100%"
            h="10"
            bg="tomato"
          ></GridItem>
          <GridItem
            rowSpan={[1, 1, 2]}
            colSpan={[4, 4, 1.33]}
            w="100%"
            h="10"
            bg="tomato"
          ></GridItem>
          <GridItem
            rowSpan={[1, 1, 2]}
            colSpan={[4, 4, 1.33]}
            w="100%"
            h="10"
            bg="mediumslateblue"
          ></GridItem>
          <GridItem
            rowSpan={[1, 1, 2]}
            colSpan={[4, 4, 1.33]}
            w="100%"
            h="10"
            bg="mediumslateblue"
          ></GridItem>
        </Grid>
      </Center>
    </div>
  );
}

export default App;
