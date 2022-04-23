import React from "react";
import {MdOutlineCancel} from "react-icons/md";

function ProductCart(props) {

    // todo : handel the submit request.
    const handelSubmit = ()=>{

    }

    return (
    
            <div className="relarive grid grid-cols-2">
                <MdOutlineCancel className="absolute top-1 right-1"/>
                <div className="w-40 h-40">
                   <img className="w-full h-full" src={props.product.img[0]} />
                </div>
                <div>
                    <h2>{props.product.name}</h2>
                    <span className="price">${props.product.price}</span>
                    <form onSubmit={handelSubmit}>
                        {/* selcet if avialble */}
                        <input type="number" value={1} name="quantity"/>
                    </form>
                </div>
            </div>

    );
}
export default ProductCart;