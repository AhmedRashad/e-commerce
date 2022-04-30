import React, { useImperativeHandle, useState } from "react";
const PopUp = React.forwardRef((props, ref) => {
  const [popup, setPopup] = useState(false);

  const handelPopUpState = (e) => {
    if (popup && e.target.id === "popBg") {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };
  useImperativeHandle(ref, () => ({
    handelPopState: handelPopUpState,
  }));
  return (
    <div
      id="popBg"
      onClick={handelPopUpState}
      className={
        (popup ? "" : "hidden") +
        " absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-75"
      }
    >
      <div className=" p-4 rounded-md bg-white">{props.form}</div>
    </div>
  );
});

export default PopUp;

