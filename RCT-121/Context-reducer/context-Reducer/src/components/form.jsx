import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio,
  Center,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
// import style from "style.module.css";
import "./style.css";
export const Form = () => {
  const [time, themefun] = useContext(ThemeContext);
  return (
    <div>
      Form
      <br />
      <Center>
        <FormControl as="fieldset">
          <RadioGroup defaultValue="Sasuke">
            <HStack spacing="24px" style={{ justifyContent: "center" }}>
              <Radio value={time === "light" ? "Sasuke" : "Nagato"}>
                Sasuke
              </Radio>
              <Radio value={time === "light" ? "Nagato" : "Sasuke"}>
                Nagato
              </Radio>
              <Radio value="Itachi">Itachi</Radio>
              <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </Center>
    </div>
  );
};
