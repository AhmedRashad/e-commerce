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
        },
        {
            id :2,
            name: "HP 14 Laptop",
            price: 600,
            image: [
                "/images/image-1649963347264.jpg",
                "/images/image-1649963347327.jpg"
            ],
        },
        {
            id :3,
            name: "HP 14 Laptop",
            price: 600,
            image: [
                "/images/image-1649963347264.jpg",
                "/images/image-1649963347327.jpg"
            ],
        },
        {
            id :4,
            name: "HP 14 Laptop",
            price: 600,
            image: [
                "/images/image-1649963347264.jpg",
                "/images/image-1649963347327.jpg"
            ],
        }
    ]
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) =>{
                return <ProductCart key={product.id} product={product}/>;

            })}
        </div>
    );
}

export default ProductListCart;