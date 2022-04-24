import {BiSearch} from "react-icons/bi";
import NavBar from "../components/NavBar/NavBar";
const HomePage = ()=>{
    return(<>
        <NavBar/>
        <div className="grid place-items-center">
        <form className="mt-8 border rounded-lg shadow-inner max-w-sm p-2 ">
            <div className="flex justify-between items-center">
                <input className="focus:outline-none" type="text" name="search" placeholder="type here"/>
                <button type="submit"><BiSearch size={20}/></button>
            </div>
        </form>
        </div>
    </>);
}
export default HomePage; 