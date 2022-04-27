import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="w-full">
        <div className="grid grid-cols-1 gap-2 md:grid-col-2">
          <h1 className="text-lg font-bold text-gray-700 lg:text-xl">
            All you need in on store
          </h1>
          <p className="font-light text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolore
          </p>
          <button className="flex items-center justify-center text-white bg-transparent border-2 border-transparent border-solid rounded bg-primary hover:border-primary duration-100 hover:text-primary ">
            shop
          </button>
          <button className="flex items-center justify-center bg-white border-2 border-solid rounded text-primary bg-primary border-primary hover:border-white duration-100 hover:text-white ">
            join us
          </button>
          <div className="p-4 grid place-items-center">
            <img src="" alt="decoration" />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

const ProductsSection = (props) => {
  return (
    <div>
      <div className="inline-block">
        <div>
          <h2 className="inline-block text-lg font-bold text-gray-700">
            {props.title}
          </h2>
          <span className="w-full h-4 bg-primary" />
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-col-2 md grid-cols-3">
        <Card product={props.product} />
      </div>
    </div>
  );
};

const CategorySection = (props) => {
  return (
    <>
      {" "}
      <div>
        <div className="inline-block">
          <div title={props.nam}>
            <h2 className="inline-block text-lg font-bold text-gray-700">
              Categories:
            </h2>
            <span className="w-full h-4 bg-primary" />
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-col-2 md grid-cols-3"></div>
      </div>
    </>
  );
};
