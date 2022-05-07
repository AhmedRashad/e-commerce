import { useState } from "react";

const Toast = (props) => {
    const [color,setColor] = useState("black") 
    let title;
    // simple mapping 
    // 0  === > warning
    // -1 === > Error
    // +1 === > success
    if(props.type === 0){
        setColor("yellow");
        title = "Warning";
    }
    if(props.type === -1){
        setColor("pink");
        title = "Error";
    }
    if(props.type === 1){
       setColor("green");
        title = "Success";
    }
  return (
    <div
      className={`bg-${color}-200 border-${color}-600 text-${color}-600 border-l-4 p-4`}
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{props.massage}</p>
    </div>
  );
};

export default Toast;
