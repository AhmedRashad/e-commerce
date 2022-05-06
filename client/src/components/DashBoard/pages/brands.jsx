import { useEffect, useRef } from "react";
import Table from "../components/table";
import PopUp from "../components/popup";
import Brand from "../../Form/Brand";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../features/brand/brandSlice";

const thead = ["name" ];

const Brands = () => {
  const { brands } =  useSelector((state)=> state.brand);
  console.log(brands)
  const popUp = useRef();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBrands());
  },[])

  return (
    <>
      <PopUp ref={popUp} form={<Brand />} />
      {/* <h1 className="text-gray-800 font-bold capitalize text-xl text-center">
        Products Page
      </h1> */}
      <div className="flex flex-row-reverse my-4 gap-4">
        <div
          onClick={() => {
            popUp.current.handelPopState();
          }}
          className="group flex items-center justify-center gap-1 p-2 bg-green-600 rounded border border-green-600 hover:border-transparent hover:bg-green-800"
        >
          <AiOutlinePlus className="text-white" />
          <button className="text-white">Add Brand</button>
        </div>
      </div>

      <h1 className="text-gray-700 text-xl mb-8 font-bold text-center">
        Brands
      </h1>
      <Table thead={thead} items={brands} />
    </>
  );
};
export default Brands;
