import Table from "../components/table"
const Offers = ()=>{
    const thead = ["name","discount","end date","status"]
    const offers = [
        {
            id:1,
            name:"New year",
            discount:"50 %",
            "end date":"20/12/2020",
            status : "closed"
        },
        {
            id:2,
            name:"Eid El-Fetter",
            discount:"50 %",
            "end date":"20/12/2020",
            status : "Wait"
        },
        {
            id:3,
            name:"RAMADAN",
            discount:"50 %",
            "end date":"20/12/2020",
            status : "open"
        },
    ]
    return(
        <>
        <h1 className="text-gray-700 text-xl mb-8 font-bold text-center" >Offers</h1>
        <Table thead={thead} items={offers}/>
        </>
    )
}
export default Offers;