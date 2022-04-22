import Star from "./star";
import {useState,useRef}  from "react";

const StarsList = (props) => {

  const [rating,setRating] = useState(props.rating || 0);

  const handelClick = (i)=>{
      setRating(i+1);
  }
  return (
    <div className="flex gap-1" >
      {Array.apply(null, Array(props.starCount)).map((_, i) => <Star onuserClick={handelClick} key={i} order={i} active={rating>i ? true : false}/>
      )}
    </div>
  );
};

export default StarsList;