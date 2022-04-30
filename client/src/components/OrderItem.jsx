import React,{useState} from "react";


/*
Made by: Mohammed Khaled, T#6.
Expected props:
order.img, .name, .price, .status, .href
*/

const order = {
    img: 'https://cdn.tuk.dev/assets/templates/olympus/projects.png',
    name: 'Basic Tee',
    price: '156',
    status: 'Delivered this Wednesday',
    href: '#',
}
export default function OrderItem() {
    return (
        <>
        <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src={order.img} />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">{order.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">${order.price}</p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">{order.status}</p>
                                </td>
                                <td className="pl-20">
                                    <a href={order.href} className="font-medium text-indigo-500">View product</a>
                                </td>
                            </tr>
        </>
    );
}