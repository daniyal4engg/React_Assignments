import { useEffect, useState } from "react";
import axios from "axios";
const GithubUsers = (q = "mojombo", page = 1) => {
  return axios("https://api.github.com/search/users", {
    method: "GET",
    params: {
      q,
      per_page: 4,
      page
    }
  });
};
export const Github = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [query, setQuery] = useState("masai");
  const [page, setPage] = useState(1);

  // useEffect(() => {  //   GithubUsers("mojombo")//     .then((res) => {//       setData(res.data);//       // console.log("data",data.items);//       setLoading(false);//     })//     .catch((err) => {//       setErr(true);//       console.log(err);//       setLoading(false);//     }); // }, []);
  useEffect(() => {
    GithubUsers(query, page)
      .then((res) => {
        setData(res.data);
        // console.log("data",data.items);
        setLoading(false);
        setErr(false);
      })
      .catch((err) => {
        setErr(true);
        console.log(err);
        setLoading(false);
      });
  }, [query, page]);

  const handleClick = (query) => {
    setQuery(query);
  };
  // const handlePageChange = (page) => {
  //   setPage(page);
  // };
  console.log("data", data);

  console.log("Query", query);
  return (
    <div>
      <h1>GitHub</h1>
      <div>{loading && <div>hello</div>}</div>
      {/* <buttononClick={() => {setLoading(!loading);}}>Toggle     </button> */}
      <SearchBox handleClick={handleClick} />
      {data?.items?.map((item) => {
        return <GithubCard key={item.id} {...item} />;
      })}
      <div>
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          PREV
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

const SearchBox = ({ handleClick }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick(text);
        }}
      >
        Search
      </button>
    </div>
  );
};

const GithubCard = ({ avatar_url, login }) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <img src={avatar_url} alt="" width="100px" />
      <div>{login}</div>
    </div>
  );
};



// function Timer(){
//   const [time,setTime]=useState(null);
// const handleStart=(time)=>{
   
// }
//   return 
//   <div>
//     {time===null? (<TimerInput handleUpdate={handleStart(time)}/>) : (
//       <div>Timer</div>
//     )
//   </div>
// }  


//  const TimerInput=({handleUpdate})=>{
//   const [time,setTime]=useState(null);
//   const handleTimeUpdate(value){
// if(Number.isNaN(value)){
//   alert("plese input number")
//   return;
// }
// setTime(Number(value))
//   }
//   return <div>
//     <input type="text" onChange={(e)=>{
//       setTime(handleTimeUpdate(e.target.value))
//     }}/>
//     <button>Start Timer</button>
//   </div>
// }