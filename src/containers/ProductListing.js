import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products :", products);

  return (
    <div className="grid-container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
