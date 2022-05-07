import ProductCart from "./ProductCart";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer";
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
        <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="grow mt-4 md:mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) =>{
                return <ProductCart key={product.id} product={product}/>;

            })}
        </div>
        <Footer/>
        </div>
    );
}

export default ProductListCart;