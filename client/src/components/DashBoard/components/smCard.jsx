import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
const SmallCard = (props) => {
    // TODO : make it responsive.
  return (
    <div
      className={
        (props.value > 0 ? "bg-green-100" : "bg-red-100") +
        " p-4 rounded-md shadow-md basis-0 grow shrink max-w-[175px] min-w-max grid place-items-center"
      }
    >
      <h3 className="font-light mb-1">{props.title}</h3>
      <div className="flex gap-1">
        <span className="text-lg font-bold md:text-xl">{props.value} %</span>
        {props.value > 0 ? (
          <BiUpArrowAlt className="text-green-500 text-lg h-8 w-8" />
        ) : (
          <BiDownArrowAlt className="text-red-500 text-lg h-8 w-8" />
        )}
      </div>
    </div>
  );
};
export default SmallCard;
