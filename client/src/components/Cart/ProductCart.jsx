import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function ProductCart(props) {
  // todo : handel the submit request.
  const handelSubmit = () => {
      
  };
  const [quantity, setQuantity] = useState(1);

  return (
    <div className=" flex gap-8">
      <div className="w-40 h-40">
        <img className="w-full h-full" src={props.product.image[0]} />
      </div>
      <div className="flex flex-col relative justify-center">
        <MdClose className="absolute top-1 right-1 text-gray-500 text-xl" />

        <h2 className="mb-2">{props.product.name}</h2>
        <span className="price mb-2">${props.product.price}</span>
        <form onSubmit={handelSubmit}>
          {/* selcet if avialble */}
          <input type="number" value={quantity} onChange={(e)=>{
              setQuantity(e.target.value);
              }} name="quantity" />
        </form>
      </div>
    </div>
  );
}
export default ProductCart;
