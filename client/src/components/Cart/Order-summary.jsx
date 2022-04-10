import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs"

export default function Ordar_summary(props) {
  return (
    <>
      <div className="card w-2/6 bg-slate-100 p-6">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Order Summary</h3>
        <ul className="mb-4">
          <li className="flex text-gray-400 mb-2">
            Subtotal
            <span className="ml-auto text-cyan-400">${props.subtotal}</span>
          </li>
          <li className="flex text-gray-400 mb-2 items-center">
            Shopping estimate
            <BsExclamationCircleFill className="ml-1" />
            <span className="ml-auto text-cyan-400">${props.shoppingEstimate}</span>
          </li>
          <li className="flex text-gray-400 mb-2 items-center">
            Tax estimate
            <BsExclamationCircleFill className="ml-1" />
            <span className="ml-auto text-cyan-400">${props.taxEstimate}</span>
          </li>
          <li className="flex text-gray-400">
            Order Total
            <span className="ml-auto text-cyan-400">${props.total}</span>
          </li>
        </ul>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>
    </>
  );
}
