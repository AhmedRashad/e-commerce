import ProductCart from "./ProductCart";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer";
import Ordar_summary from "./Order-summary";
import { useSelector } from "react-redux";
const ProductListCart = () => {
  const { products } = useSelector((state) => state.shoppingCart);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="grow mt-4 md:mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })}
      </div>
      <Ordar_summary />
      <Footer />
    </div>
  );
};

export default ProductListCart;