import { useState } from "react";

const Apperance = () => {
    const [checked,setCheched] = useState(false);
  return (
    <div className="flex gap-2 justify-around">
        <h3>Toggel Dark mode :</h3>
      <div class="mb-3">
        <div onClick={()=>{setCheched(prev => !prev)}}
        class="relative inline-block w-10 mr-2 align-middle select-none">
          <div
            class={(checked?"bg-blue-500 right-0":"bg-white right-4")+" outline-none focus:outline-none  duration-200 ease-in absolute block w-6 h-6 rounded-full  border-4 appearance-none cursor-pointer"}
          />
          <p
            class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></p>
        </div>
        <span class="text-gray-400 font-medium">
            {checked?"Dark mode":"Light mode"}
        </span>
      </div>
    </div>
  );
};

export default Apperance;
  