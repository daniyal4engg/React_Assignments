import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { Cart } from "../Pages/Cart";
import { Product } from "../Pages/Product";
import { Products } from "../Pages/Products";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/products/:id" element={<Product />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
};
