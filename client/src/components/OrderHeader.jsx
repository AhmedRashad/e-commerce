import React,{useState} from "react";
import OrderItem from "./OrderItem";

/*
Made by: Mohammed Khaled, T#6.
*/

export default function OrderHeader() {
    return (
        <>
            <div className="w-full sm:px-6">
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">Product</th>
                                <th className="font-normal text-left pl-12">Price</th>
                                <th className="font-normal text-left pl-12">Status</th>
                                <th className="font-normal text-left pl-20">Info</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <OrderItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}