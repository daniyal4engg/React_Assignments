import logo from './logo.svg';
import './App.css';

function App() {
  let data = ["Service", "Projects", "About"];
  return (
    <div className="navbar">
      <div id="logo">LOGOBAKERY</div>
      <div id="servise" style={{color:"black"}}>{data.map((el) => (
        <a href="https://www.lifestyle.com/">{el}</a>
      ))}</div>
      <button id="btn">Contact</button>
    </div>
  );
}

export default App;









