import React from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/footer";

function ProductsList() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 z-10 mt-5">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      {/* grower */}
      <div className="grow-[2]"/>
      <Footer/>
    </div>
  );
}

export default ProductsList;
