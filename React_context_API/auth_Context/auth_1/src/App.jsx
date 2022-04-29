import "./App.css";
import { Navbar } from "./components/Body/Navbar";
import { Cart } from "./components/Body/Cart";
import { User } from "./components/Body/User";

function App() {
  return (
    <div className="App">
      <User />
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;

// const { handleLanguage } = useContext(LangguageContext);

// <button
// onClick={() => {
//   handleLanguage();
// }}
// >
// change Language
// </button>
