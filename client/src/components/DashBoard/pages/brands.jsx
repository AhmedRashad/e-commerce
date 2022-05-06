import { useEffect, useRef, useState } from "react";
import Table from "../components/table";
import PopUp from "../components/popup";
import Brand from "../../Form/Brand";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../features/brand/brandSlice";
import Delete from "../components/delete";
const thead = ["name" ];

const Brands = () => {
  const [content, setContent] = useState(<Brand />);

  const { brands } =  useSelector((state)=> state.brand);
  console.log(brands)
  const popUp = useRef();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBrands());
  },[])

  const handelAction = (target, item) => {
    // this simple mapping
    // 0 ===== > view
    // 1 ===== > update
    // 2 ===== > delete

    if (target === 0) {
      setContent(<Cat item={item} />);
      console.log(item);
      popUp.current.handelPopState();
    }
    if (target === 2){
      setContent(<Delete name={item.name} close={popUp.current.close}/>);
      popUp.current.handelPopState();
    }
  };

  return (
    <>
      <PopUp ref={popUp} form={content} />
      {/* <h1 className="text-gray-800 font-bold capitalize text-xl text-center">
        Products Page
      </h1> */}
      <div className="flex flex-row-reverse my-4 gap-4">
        <div
          onClick={() => {
            setContent(<Brand/>)
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
      <Table thead={thead} items={brands} handelAction={handelAction}/>
    </>
  );
};

const Cat = (props) => {
  
  return (
    <div className=" p-4 bg-white dark:bg-gray-800 w-64 m-auto">
    <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
            <div className="mt-4 w-12 h-12 m-auto" >
                <img className="block w-full" src={props.item.img}/>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                 {props.item.name}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg py-2 mb-4 px-6">
                 {props.item.description} 
            </p>

        </div>
    </div>
</div>

  );
};
export default Brands;
