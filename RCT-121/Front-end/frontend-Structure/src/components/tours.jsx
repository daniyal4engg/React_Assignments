import "../App.css";
import { useEffect, useState } from "react";
import { Button, Center, Select, Stack, ButtonGroup } from "@chakra-ui/react";
import { Filter } from "./Filter";
import { Link } from "react-router-dom";
import axios from "axios";
export const Tours = () => {
  const [store, setStore] = useState([]);
  const [sortPrice, setSortPrice] = useState("desc");
  const [page, setPage] = useState(1);
  useEffect(() => {
    getdata({ sortPrice, page });
  }, [sortPrice, page]);
  console.log("sortprice", sortPrice);
  // Page logic
  if (page <= 0) {
    setPage(1);
  }
  console.log("page", page);
  const getdata = async ({ sortPrice, page }) => {
    try {
      const res = await axios({
        url: "https://bohemian1.herokuapp.com/fashion",
        method: "get",
        params: {
          _sort: "price",
          _order: `${sortPrice}`,
          _page: page,
          _limit: 6,
        },
      });
      console.log(res.data);
      setStore(res.data);
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setSortPrice("asc");
          }}
        >
          sort by asc
        </button>
        <button
          onClick={() => {
            setSortPrice("desc");
          }}
        >
          sort by desc
        </button>
        <br />
        <Center>
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => {
                setPage(page - 1);
              }}
            >
              PREV
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              NEXT
            </Button>
          </Stack>
        </Center>
      </div>
      <div className="grid">
        {store?.map((e) => {
          return (
            <Link to="/" key={e.id}>
              <div
                style={{
                  width: "300px",
                  border: "1px solid green",
                  margin: "10px",
                }}
              >
                <div>
                  <img src={e.img} alt="" width="100px" />
                </div>
                <div>{e.category}</div>

                <p>${e.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
