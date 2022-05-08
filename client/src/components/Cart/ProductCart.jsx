import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { removeProduct } from "../../features/shoppingCartSlice";
import { useDispatch } from "react-redux";
function ProductCart(props) {
  // todo : handel the submit request.
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeProduct(props.product));
  };

  return (
    <div className=" flex gap-8">
      <div className="w-40 h-40">
        <img className="w-full h-full" src={props.product.image[0]} />
      </div>
      <div className="flex flex-col relative justify-center">
        <button onClick={handleRemove}>
          <MdClose className="absolute top-1 right-1 text-gray-500 text-xl" />
        </button>

        <h2 className="mb-2">{props.product.name}</h2>
        <span className="price mb-2">${props.product.price}</span>
      </div>
    </div>
  );
}
export default ProductCart;
