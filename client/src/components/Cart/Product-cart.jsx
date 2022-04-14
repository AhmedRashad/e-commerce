import React from "react";

function Product_cart(props) {
    return (
        <>
            <div className="card">
                <img className="" src={props.img} alt={props.alt} />
                <div>
                    <h2>{props.name}</h2>
                    <span className="price">${props.price}</span>
                </div>
                <div className="info">{props.info}</div>
                <div>
                    <div className="availability">{props.availability}</div>
                    <button className="remove">Remove</button>
                </div>
            </div>
        </>
    );
}
export default Product_cart;