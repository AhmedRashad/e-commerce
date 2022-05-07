import Table from "../components/table"
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../features/orders/orderSlice";
import { useEffect } from "react";

const Orders = ()=>{
    const thead = ["user","total","status","createdAt"];
    const { orders } = useSelector((state) => state.order);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
      }, []);
    

    return(
        <>
        
        <h1 className="text-gray-700 text-xl mb-8 font-bold text-center" >Orders</h1>
        <Table thead={thead} items={orders}/>
        </>
    )
}

export default Orders;