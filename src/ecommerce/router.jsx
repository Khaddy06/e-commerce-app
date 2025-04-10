import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./home";
import Layout from "./layout";
import Cart from "./cart";
import ProductDetails from "./productdetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<ProductListing />} />
        <Route path="/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


