import ProductCart from "./ProductCart";
const ProductListCart = ()=>{
    const products = [
        {
            id :1,
            name: "HP 14 Laptop",
            price: 600,
            image: [
                "/images/image-1649963347264.jpg",
                "/images/image-1649963347327.jpg"
            ],
        }
    ]
    return (
        <div className="grid col-1 gap-2">
            {products.map(product => <ProductCart key={product.id} product={product}/>)}
        </div>
    );
}

export default ProductListCart;