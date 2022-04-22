import React from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/product/productSlice";

function ProductsList() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 z-10">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
