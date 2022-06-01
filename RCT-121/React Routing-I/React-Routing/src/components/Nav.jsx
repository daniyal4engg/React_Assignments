import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/products">Products</Link>
    </div>
  );
};
