import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Products } from "../components/Products";
import { Nav } from "../components/Nav";
import { ProductPage } from "../components/ProductPage";
import { ErrorPage } from "../components/ErrorPage";
// import { ErrorPage } from "../components/ErrorPage";
export const AllRoutes = () => {
  return (
    <div>
      AllRouters
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}>
          Products
        </Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
};
