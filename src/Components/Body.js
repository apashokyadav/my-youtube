import { useSelector } from "react-redux";
import Maincontainer from "./Maincontainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
return(
    <div className="w-full h-full flex justify-center" >   
        {isMenuOpen && <SideBar/>}
         <Outlet/>
    </div>
       
)

}
export default Body;