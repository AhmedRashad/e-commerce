import React from "react";

// Unfinished


/*
Made by: Mohammed Khaled, T#6.
Expected props:
- product.name, .images, .description
- order.stage (processing, shipping, delivered)
- order.percentage

*/


const product = {
    images: [{src: "https://www.hyperui.dev/photos/man-5.jpeg", alt:"productImg"}],
    name: 'Basic 6-pack Tee',
    price: '153',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
}

const order = {
    stage: 'Shipping',
    percentage: '75',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function OrderInProgress() {
    return (
        <>
        <div className="relative p-8 overflow-hidden border-solid border-2 border-indigo-600 rounded-lg flex flex-col">
  <div className="flex">
    <div className="flex-shrink-0 block">
      <img
        className="w-44 h-44 rounded-lg shadow-sm m-3"
        src={product.images[0].src}
        alt={product.images[0].alt}/>
    </div>
    <div>
      <h5 className="text-3xl font-bold text-gray-900">{product.name}</h5>
      <p className="mt-1 text-s font-medium text-gray-600">${product.price}</p>
    <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{product.description}</p>
    </div>
    </div>

  </div>

  <div className="relative pt-1">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
        {order.stage}
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-indigo-600">
        {order.percentage}%
      </span>
    </div>
  </div>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
    <div style={{ width: `${order.percentage}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
  </div>
</div>

  
</div>
</>
      );
    }
export default OrderInProgress;