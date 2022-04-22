import React from "react";
import Category from "./Category";
import Brand from "./Brand";
import Product from "./Product";
function AllForm() {
  return (
    <div className="flex flex-row">
      <div>
        Category
        <Category />
      </div>
      <div>
        Brand
        <Brand />
      </div>
      <div>
        Product
        <Product />
      </div>
    </div>
  );
}

export default AllForm;
