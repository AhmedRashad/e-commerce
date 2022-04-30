import NavBar from "../components/NavBar/NavBar";
import TopStrip from "../components/topStrip";
import Header from "../components/header";
import FeaturesSection from "../components/featuersSection";
import Footer from "../components/footer";
import CardList from "../components/cardList";
import { useSelector } from "react-redux";
import ContactUs from "../components/contactus";

const HomePage = () => {
  let { products } = useSelector((state) => state.product);
  //TODO : need to fetched probaly
  products = products.slice(0, 5);

  return (
    <>
      <TopStrip offer="Ramadan 50% offer" />
      <NavBar />
      <Header />
      <div className=" mx-auto w-[80vw] h-1 bg-indigo-500 dark:bg-white my-4 md:my-8"></div>
      <CardList products={products} />
      <div className=" mx-auto w-[80vw] h-1 bg-indigo-500 dark:bg-white my-4 md:my-8"></div>
      <FeaturesSection />
      <div className=" mx-auto w-[80vw] h-1 bg-indigo-500 dark:bg-white my-4 md:my-8"></div>
      <ContactUs />
      <Footer />
    </>
  );
};
export default HomePage;
