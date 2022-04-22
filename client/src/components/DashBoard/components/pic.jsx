import Card from "./card";

const Pic = (props) => {
  return (
    <div className={`inline-block p-2 rounded shadow w-20 h-20 lg:w-28 lg:h-28`}>
      <img
        className="block overflow-hidden w-full"
        
        src={props.img}
      />
    </div>
  );
};

export default Pic;
