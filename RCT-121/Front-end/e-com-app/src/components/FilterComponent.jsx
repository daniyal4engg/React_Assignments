import {
  Checkbox,
  CheckboxGroup,
  VStack,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../Redux/products/action";
import { useDispatch } from "react-redux";
export const FilterComponent = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [categoryValue, setCategoryValues] = useState(
    searchparams.getAll("category") || []
  );

  // console.log(searchparams.getAll("category"));
  const categoryHandler = (values) => {
    // console.log(values);
    setCategoryValues(values);
  };

  useEffect(() => {
    if (categoryValue) {
      setSearchParams({ category: categoryValue }, { replace: true });
      let params = {
        category: searchparams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [categoryValue, setSearchParams, dispatch, searchparams]);
  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
        <Text fontSize="2xl">Filter </Text>
        <Text>Category </Text>

        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValue}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">men's clothing</Checkbox>
            <Checkbox value="women's clothing">women's clothing</Checkbox>
            <Checkbox value="jewelery">jewelery</Checkbox>
            <Checkbox value="electronics">electronics</Checkbox>
            <Checkbox value="bags">bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: "block", md: "none" }} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
