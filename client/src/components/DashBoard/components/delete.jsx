import {AiOutlineDelete} from "react-icons/ai";
const Delete = (props)=>{
   
    return(

<div className=" p-4 bg-white dark:bg-gray-800 w-64 m-auto">
    <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
            <AiOutlineDelete className="mt-4 w-12 h-12 m-auto text-red-500" size={40} />
            <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                Remove {props.name}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                Are you sure you want to delete this {props.name} ?
            </p>
            <div className="flex items-center justify-between gap-4 w-full mt-8">
                <button type="button" className="py-2 px-4  bg-red-400 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 border-2 border-solid border-red-400 hover:border-red-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Delete
                </button>
                <button 
                onClick={()=>{props.cancel()}}
                type="button" className="py-2 px-4  bg-white hover:bg-gray-100 border-solid border-indigo-600 border-2  focus:ring-offset-indigo-200 text-indigo-500 hover:text-white 
                hover:bg-indigo-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</div>

    );
}

export default Delete;