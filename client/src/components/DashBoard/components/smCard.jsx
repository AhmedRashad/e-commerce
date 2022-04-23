import {BiUpArrowAlt,BiDownArrowAlt} from "react-icons/bi"
const SmallCard = (props)=>{
    return(
        <div className={(props.value > 0?"bg-green-500":"bg-red-500") + " p-4 rounded-md shadow-md"}>
            <h3 className="font-light mb-1">{props.title}</h3>
            <span>{props.value} %</span>
            {props.value > 0 ? <BiUpArrowAlt className="text-green-500 text-lg"/>:<BiDownArrowAlt className="text-red-500 text-lg"/>}
        </div>
    );
}
export default SmallCard;