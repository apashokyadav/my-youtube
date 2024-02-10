import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar=()=>{
    return(
        <div className="flex-col w-48 ml-2 " >
            <div className="border-b-2 border-slate-500 my-2 ">
                    <Link to="/">
                        <li className="flex rounded-xl hover:bg-zinc-700 py-2 transition-colors duration-300 ease-in-out" >
                                <div className="text-2xl mx-2" > < IoMdHome /> </div> 
                                <h1 className="text-lg ml-4 " >Home </h1> 
                        </li>
                    </Link>
                    
                    <li className="flex rounded-xl hover:bg-zinc-700 py-2 transition-colors duration-300 ease-in-out" >
                            <div className="text-2xl mx-2" > <SiYoutubeshorts /> </div> 
                            <h1 className="text-lg ml-4" >Shorts </h1> 
                    </li>
                    <li className="flex rounded-xl hover:bg-zinc-700 py-2 transition-colors duration-300 ease-in-out" >
                            <div className="text-2xl mx-2" > <MdSubscriptions /> </div> 
                            <h1 className="text-lg ml-4" >Subscriptions</h1> 
                    </li>
            </div>
            <div className="my-2" >
                <ul>
                    <li className="flex rounded-xl hover:bg-zinc-700 py-2" >
                            <div className="text-2xl mx-2" >You {" >"}</div> 
                    </li>
                    <li className="flex rounded-xl hover:bg-zinc-700 py-2" >
                            <div className="text-2xl mx-2" > <GrChannel /> </div> 
                            <h1 className="text-lg ml-4" >Your channel</h1> 
                    </li> <li className="flex rounded-xl hover:bg-zinc-700 py-21" >
                            <div className="text-2xl mx-2" > <FaHistory /> </div> 
                            <h1 className="text-lg ml-4" >History</h1> 
                    </li> <li className="flex rounded-xl hover:bg-zinc-700 py-2" >
                            <div className="text-2xl mx-2" > <BiSolidVideos /> </div> 
                            <h1 className="text-lg ml-4" >Your Videos</h1> 
                    </li> <li className="flex rounded-xl hover:bg-zinc-700 py-2" >
                            <div className="text-2xl mx-2" > <MdWatchLater /> </div> 
                            <h1 className="text-lg ml-4" >Watch later</h1> 
                    </li> <li className="flex rounded-xl hover:bg-zinc-700 py-2" >
                            <div className="text-2xl mx-2" > <AiTwotoneLike /> </div> 
                            <h1 className="text-lg ml-4" >Liked videos</h1> 
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            
        </div>

    )
}
export default SideBar;