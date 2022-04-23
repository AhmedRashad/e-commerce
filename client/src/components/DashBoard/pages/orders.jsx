import Table from "../components/table"
const Orders = ()=>{
    const thead = ["name","price","date"]
    const orders = [
        {
            id:1,
            name:"isdf",
            price:210,
            date:20/12/2020
        },
        {
            id:2,
            name:"isdf",
            price:210,
            date:20/12/2020
        },
        {
            id:3,
            name:"isdf",
            price:210,
            date:20/12/2020
        },
    ]
    return(
        <>
        <h1 className="text-gray-700 text-xl mb-8 font-bold text-center" >Orders</h1>
        <Table thead={thead} items={orders}/>
        </>
    )
}

export default Orders;