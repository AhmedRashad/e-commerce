import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
const SmallCardIm = (props) => {
    // TODO : make it responsive.
  return (
    <div className="p-4 rounded-md shadow-md basis-0 grow shrink max-w-[175px] min-w-max grid place-items-center">
      <h3 className="font-light mb-1">{props.title}</h3>
      <div className="flex gap-1">
        <span className="text-lg font-bold md:text-xl">{props.value} %</span>  
      </div>
    </div>
  );
};
export default SmallCard;
