import { useState } from "react";

const Toast = (props) => {
    let title;
    // simple mapping 
    // 0  === > warning
    // -1 === > Error
    // +1 === > success
    if(props.type === 0){
      return (
        <div
          className={`bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4`}
          role="alert"
        >
          <p className="font-bold">Warring</p>
          <p>{props.massage}</p>
        </div>
      );
    }
    if(props.type === -1){
      return (
        <div
          className={`bg-red-200 border-red-600 text-red-600 border-l-4 p-4`}
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{props.massage}</p>
        </div>
      );
    }
    if(props.type === 1){
      return (
        <div
          className={`bg-green-200 border-green-600 text-green-600 border-l-4 p-4`}
          role="alert"
        >
          <p className="font-bold">Success</p>
          <p>{props.massage}</p>
        </div>
      );
    }
    else{
      return <h1>You didn't give type</h1>
    }
  
};

export default Toast;
