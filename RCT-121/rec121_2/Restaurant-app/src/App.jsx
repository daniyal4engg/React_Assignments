import { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [ratingOrder, setRatingOrder] = useState("asc");
  const [costOrder, setCostOrder] = useState("asc");
  const [filterRating, setFilterRating] = useState(0);
  const [q, setQ] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    getdetails({ page, ratingOrder, costOrder, filterRating, q });
  }, [page, ratingOrder, costOrder, filterRating, q]);
  // console.log("q", q);
  // const paginate = () => {
  //   if (page < 5) {
  //     setPage(page + 1);
  //   }
  // };
  // const paginate1 = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // };
  if (page > 5) {
    setPage(5);
  }

  const getdetails = async ({
    page,
    ratingOrder,
    costOrder,
    filterRating,
    q,
  }) => {
    try {
      setLoading(true);
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/food",
        params: {
          _page: page,
          _limit: 5,
          _sort: "rating,cost",
          _order: `${ratingOrder},${costOrder}`,
          // _sort: "cost",
          // _order: costOrder,
          rating_gte: filterRating,
          q: q,
        },
      });

      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("error", error);
    }
  };
  console.log(page);

  return (
    <div className="App">
      <h1>Restaurant Details</h1>
      {loading ? <div>loading</div> : null}
      {/* sort in cost Ascending & Descending Button*/}
      <div>
        <button
          disabled={costOrder === "asc"}
          onClick={() => setCostOrder("asc")}
        >
          Ascending cost
        </button>
        <button
          disabled={costOrder === "desc"}
          onClick={() => {
            setCostOrder("desc");
          }}
        >
          Descending cost
        </button>
      </div>

      {/* sort by rating in  Ascending & Descending Button*/}
      <div>
        <button
          disabled={ratingOrder === "asc"}
          onClick={() => setRatingOrder("asc")}
        >
          Sort by Ascending rating
        </button>
        <button
          disabled={ratingOrder === "desc"}
          onClick={() => {
            setRatingOrder("desc");
          }}
        >
          Sort by descending rating
        </button>
      </div>

      <div>
        {/*   1,2,3,4,5 Button*/}
        {/*   <PaginationComponent
          currentPage={page}
          lastPage={5}
          onPageChange={setPage}
     /> */}

        {/*   prev and next Button*/}
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
      <div>
        {/*   Greater than 1 ,2,3,4 Button    {gte}*/}
        <button onClick={() => setFilterRating(1)}>
          Rating Greater than 1
        </button>
        <button onClick={() => setFilterRating(2)}>
          Rating Greater than 2
        </button>
        <button onClick={() => setFilterRating(3)}>
          Rating Greater than 3
        </button>
        <button onClick={() => setFilterRating(4)}>
          Rating Greater than 4
        </button>
        <button onClick={() => setFilterRating(0)}>Rating All</button>
      </div>
      <br />

      {/*  seach using keywords input search as well*/}
      <div>
        <input
          value={text}
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setQ(text);
          }}
        >
          Search
        </button>
      </div>

      <div>
        {data.map((item) => {
          return <RestaurantDetails key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

// create 1,2,3,4,5 page button
// given the current page,last page,create a pagination Component
// const PaginationComponent = ({ currentPage, lastPage, onPageChange }) => {
//   const arr = new Array.lastPage.fill(0);
//   return (
//     <div>
//       {arr.map((item, page) => (
//         <button
//           onClick={() => {
//             onPageChange(page + 1);
//           }}
//           disabled={page + 1 === currentPage}
//         >
//           {page + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

export default App;
