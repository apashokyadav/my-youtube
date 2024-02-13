import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
return(
    <div className="w-full h-full flex-col justify-center" >
        <Header/>
        <div className="w-full h-full flex justify-center" >
        {isMenuOpen &&
        <SideBar/>}
         <Outlet/>
        </div>
        
    </div>
       
)

}
export default Body;