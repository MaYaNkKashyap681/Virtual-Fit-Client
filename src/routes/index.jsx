import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SharedLayout from "../components/SharedLayout.jsx";
import ProductListings from "../pages/ProductListings.jsx";
import BodyDimensions from "../components/BodyDimensions.jsx";
import TryOn from "../components/TryOn.jsx";

const Index = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} index />
        <Route path = "/explore" element={<ProductListings/>} />
        <Route path = "/dimension" element={<BodyDimensions/>} />
        <Route path = "/tryon" element={<TryOn/>} />
      </Route>
    </Routes>
  );
};

export { Index };