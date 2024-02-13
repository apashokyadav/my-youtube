import { BsPersonCircle } from "react-icons/bs";
import {getTimeDifference } from "./functions";
import Simmer from "./Simmer/SimmerVideoContainer"
import { Link ,useNavigate} from "react-router-dom";
import {useSelector } from "react-redux";
import { useEffect } from "react";

const Videocard = ({ info }) => {
    const {id,snippet}=info;
    const {channelTitle,title,publishedAt}=snippet;
    const timeDifference=getTimeDifference(publishedAt);
    
  return (
    <div className="max-w-screen-lg  m-2 p-2  w-full h-full sm:w-80 shadow-lg duration-200 hover:scale-105 ">
        <div className="relative">
                <img
                className=" w-full  rounded-xl"
                src={"https://i.ytimg.com/vi/" + id.videoId + "/mqdefault.jpg"}
                />
        </div>
        <div className="flex " >            
            <div className="flex-col items-center w-8 mr-1 ">
                 <div className="text-2xl m-2 ml-1 p-1 pl-0 text-gray-500" >  <BsPersonCircle /></div>
            </div>
            <div>
                <h1 className=" max-w-xs text-lg">{title}</h1>
                <h1 className=" text-sm text-gray-600">{channelTitle}</h1>
                <div className="flex  text-sm text-gray-500">
                    <h1 className="ml-1" >{timeDifference+" ago"}</h1>
                </div>
            </div>
      </div>
    </div>
  );
};

const SearchResult=()=>{
    const navigate = useNavigate();
    const videoList=useSelector(store=>store.videolist.list);
    useEffect(()=>{
        if(videoList.length===0){
            navigate('/');
        }
    },[videoList])
    
    
    return videoList?.length===0?( <Simmer/> ) : (
       <div className="w-full flex justify-center flex-wrap">
        { videoList?.map((item)=>(
            <Link key={item.id} to={"/watch?v="+item.id.videoId} >
              <Videocard info={item}/>
            </Link>
        ))}
       </div>
    )
}
export default SearchResult;
