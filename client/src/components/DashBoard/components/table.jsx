import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil ,BsEyeFill} from "react-icons/bs";
const Table = (props) => {
  return (
    <table className="w-full text-left whitespace-nowrap ">
      <thead>
        <tr>
          {props.thead.map((h, i) => (
            <th className="font-light text-gray-700 pl-4 md:pl-8" key={i + 1}>
              {h}
            </th>
          ))}
          <th className="font-light text-gray-700 pl-4 md:pl-8">view</th>
          <th className="font-light text-gray-700 pl-4 md:pl-8">update</th>
          <th className="font-light text-gray-700 pl-4 md:pl-8">delete</th>
        </tr>
      </thead>
      <tbody>
        <tr class="h-3"></tr>
        {props.items.map((item) => (
          <>
            <tr
              tabindex="0"
              className="h-16 border-solid
                border border-gray-100 odd:bg-white even:bg-slate-100"
              key={item.id}
            >
              {props.thead.map((t) => (
                <td className="pl-4 md:pl-8">{item[t]}</td>
              ))}
              <td className="px-4 w-28">
                <div className="group flex items-center justify-center gap-1 p-2 rounded border border-gray-500  hover:border-transparent hover:bg-gray-500">
                  <BsEyeFill className="text-gray-500 group-hover:text-white" />
                  <button className="hidden xs:block text-xs text-gray-500 group-hover:text-white">
                    View
                  </button>
                </div>
              </td>
              <td className="px-4 w-24">
                <div className=" group flex items-center justify-center gap-1 p-2 rounded border border-primary  hover:border-transparent hover:bg-primary">
                  <BsPencil className="text-primary group-hover:text-white" />
                  <button className="hidden xs:block text-xs text-primary group-hover:text-white">
                    update
                  </button>
                </div>
              </td>
              <td className="px-4 w-24">
                <div className="group flex items-center justify-center gap-1 p-2 rounded border border-red-500  hover:border-transparent hover:bg-red-500">
                  <RiDeleteBinLine className="text-red-500 group-hover:text-white" />
                  <button className="hidden xs:block text-xs text-red-500 group-hover:text-white">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr class="h-1"></tr>
            <tr class="h-1"></tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
