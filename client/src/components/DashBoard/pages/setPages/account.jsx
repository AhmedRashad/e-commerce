import {  useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { getUser } from "../../../../features/auth/authSlice";


const Account = ()=>{
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
      }, []);
    return(
        <>
        <h1>this is the Account page</h1>
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800 " >
            <p className="mb-6 text-xl   text-gray-800 dark:text-white">User Name :<span className="font-bold"> {user.name}</span></p>
            <p className="mb-6 text-xl   text-gray-800 dark:text-white">User Email :<span className="font-bold"> {user.email}</span></p>
            <p className="mb-1 text-xl   text-gray-800 dark:text-white">User authrization :<span className="font-bold"> {user.admin?"Admin":"Normal user"}</span></p>
        </div>
        </>
    );
}

export default Account;i