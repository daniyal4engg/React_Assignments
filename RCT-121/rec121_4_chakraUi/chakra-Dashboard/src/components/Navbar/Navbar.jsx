// import { SearchIcon } from "./SearchIcon";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
// import { IconName } from "react-icons/ai";
import {
  Box,
  Stack,
  Button,
  Image,
  Spacer,
  Wrap,
  WrapItem,
  Center,
  HStack,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  FormHelperText,
  Text,
  SimpleGrid,
  IconButton,
  Select,
  // SearchIcon,
} from "@chakra-ui/react";
// import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      {/*Navbar */}
      <Wrap justify="space-between" m="10px">
        <WrapItem>
          <Box>
            <Image
              w="32px"
              h="32px"
              className=""
              src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
              alt="Dan Abramov"
            />
          </Box>
        </WrapItem>
        <WrapItem>
          <Box>
            <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="teal" variant="ghost">
                Sign In
              </Button>

              <Button colorScheme="teal" variant="outline">
                Sign Up
              </Button>
              <Button
                colorScheme="voilet"
                variant="solid"
                bgGradient="linear(to-r, #7D5CD5, #3680CF)"
              >
                Post a Job
              </Button>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
      <hr />
      <br />
      <Container>
        <Center>
          <Wrap justify={"center"} w="100%">
            <Box w="80%">
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Type job title or keyword"
                />
              </FormControl>
            </Box>
            <Box>
              <Button>icon</Button>
            </Box>
          </Wrap>
        </Center>
      </Container>
      <br />
      <Container>
        <SimpleGrid rows={[3, 1]} columns={[1, 3]} spacing={3} color={"white"}>
          <Button
            rowSpan={[1, 1]}
            colSpan={[1, 1]}
            bg="mediumpurple"
            height="50px"
          >
            Remote
          </Button>
          <Button
            rowSpan={[1, 1]}
            colSpan={[1, 1]}
            bg="mediumpurple"
            height="50px"
          >
            Tech
          </Button>
          <Button
            rowSpan={[1, 1]}
            colSpan={[1, 1]}
            bg="mediumpurple"
            height="50px"
          >
            Marketing
          </Button>
        </SimpleGrid>
      </Container>

      <Container mt="10" w="100%" bg={"#EDF2F7"}>
        <Box>
          <Heading>Technology Jobs</Heading>
        </Box>
        <Box className="cards">
          <Stack spacing={3}>
            <Box className="card1" w="100%" color={"black"} bg="white"></Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

// <Box className="">
//         <Flex justify="space-between">
//           <Box>
//             <Image
//               w="32px"
//               h="32px"
//               className=""
//               src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
//               alt="Dan Abramov"
//             />
//           </Box>
//           <Box>
//             <Stack direction="row" spacing={4} align="center">
//               <Button colorScheme="teal" variant="ghost">
//                 Button
//               </Button>

//               <Button colorScheme="teal" variant="outline">
//                 Button
//               </Button>
//               <Button
//                 colorScheme="teal"
//                 variant="solid"
//                 bgGradient="linear(to-r, #7D5CD5, #3680CF)"
//               >
//                 Button
//               </Button>
//             </Stack>
//           </Box>
//         </Flex>

//         <Wrap justify="space-between">
//           <WrapItem>
//             <Box>
//               <Image
//                 w="32px"
//                 h="32px"
//                 className=""
//                 src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
//                 alt="Dan Abramov"
//               />
//             </Box>
//           </WrapItem>
//           <WrapItem>
//             <Box>
//               <Stack direction="row" spacing={4} align="center">
//                 <Button colorScheme="teal" variant="ghost">
//                   Button
//                 </Button>

//                 <Button colorScheme="teal" variant="outline">
//                   Button
//                 </Button>
//                 <Button
//                   colorScheme="teal"
//                   variant="solid"
//                   bgGradient="linear(to-r, #7D5CD5, #3680CF)"
//                 >
//                   Button
//                 </Button>
//               </Stack>
//             </Box>
//           </WrapItem>
//         </Wrap>
//       </Box>
