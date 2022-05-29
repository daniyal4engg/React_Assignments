import {
  Box,
  Button,
  Center,
  ButtonGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
// import style from "style.module.css";
import "./style.css";
export const Navbar = () => {
  const [time, themefun] = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <br />
      <Center>
        <Wrap>
          <WrapItem>
            <button
              style={{ padding: "5px", border: "white", borderRadius: "10px" }}
              className={time === "light" ? "lightButton" : "darkButton"}
            >
              {time}
            </button>

            <Box>
              <Button
                onClick={() => {
                  themefun();
                }}
                colorScheme="blue"
              >
                Clicker here to change DOM
              </Button>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </div>
  );
};
