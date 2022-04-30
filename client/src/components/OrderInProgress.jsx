import React from "react";

// Unfinished


/*
Made by: Mohammed Khaled, T#6.
Expected props:
- product.name, .href, .images, .description, .highlights, .details
- order.stage
*/


const product = {
    name: 'Basic 6-pack Tee',
    price: '153',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
}

const order = {
    stage: '2'
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
        src="https://www.hyperui.dev/photos/man-5.jpeg"
        alt=""/>
    </div>
    <div>
      <h5 className="text-3xl font-bold text-gray-900">{product.name}</h5>
      <p className="mt-1 text-s font-medium text-gray-600">${product.price}</p>
      <div className="mt-4 sm:pr-8">
    <p className="text-sm text-gray-500">
      {product.description}
    </p>
  </div>

    <div className="flex flex-col-reverse ml-3 sm:ml-6">
      <dt className="text-sm font-medium text-gray-600">Reading time</dt>
      <dd className="text-xs text-gray-500">3 minute</dd>
    </div>
    </div>

  </div>



  <div className="h-28 flex items-center justify-center">
                <div className="w-11/12 h- self-center">
                <div className="bg-gray-200 h-1 flex items-center justify-between">
                    <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
                        <div className="bg-indigo-700 text-gray-100 text-xs h-10 w-10 rounded-full shadow flex items-center justify-center">
                        Order placed
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
                        <div className="absolute right-0 -mr-2">
                            <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                                <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                <polygon id="Triangle" points="20 0 28 8 12 8" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-indigo-700 text-xs font-bold">Step 3: Analyzing</p>
                            </div>
                        </div>
                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                        <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                            <div className="h-3 w-3 bg-indigo-700 rounded-full" />
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-end">
                        <div className="bg-white h-6 w-6 rounded-full shadow" />
                    </div>
                </div>
            </div>
  </div>
</div>
</>
      );
    }
export default OrderInProgress;