const Toast = (props) => {
    let color , title;
    // simple mapping 
    // 0  === > warning
    // -1 === > Error
    // +1 === > success
    if(props.type == 0){
        color = "yellow";
        title = "Warning";
    }
    if(props.type == -1){
        color = "pink";
        title = "Error";
    }
    if(props.type == 1){
        color = "green";
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
