import { getTimeDifference } from "./functions";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API} from "../utils/constant";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import SimmerWatchlist from "./Simmer/SimmerWatchlist";

const WatchVideocard = ({ info }) => {
    const {id,snippet}=info; 
    const {channelTitle,title,publishedAt}=snippet;
    const timeDifference=getTimeDifference(publishedAt);
  return (
    <div className="flex m-2 p-1 w-full rounded-2xl hover:bg-zinc-800">
        <div className="w-1/2 relative h-full m-2">
                <img
                className="rounded-xl h-full "
                src={"https://i.ytimg.com/vi/" + id.videoId + "/mqdefault.jpg"}
                alt="Video"
                />
        </div>
        <div className=" w-1/2 m-1 ml-0">
            <h1 className=" text-sm">{title}</h1>
            <div>
                <h1 className=" text-sm text-gray-600">{channelTitle}</h1>
                <div className="flex  text-xs text-gray-500">
                    <h1 className="ml-1" >{timeDifference+" ago"}</h1>
                </div>
            </div>
        </div>

        

    </div>
  );
};

const WatchVideolist=({item})=>{
    const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY
    const [videoList ,setVideoList]=useState([]);
    const videoTitle=item?.snippet?.localized?.title;
    const fetchData=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_API + videoTitle + "&key=" + GOOGLE_API_KEY);
        const json=await data.json();
        setVideoList(json.items);
        console.log(json)
    }
    useEffect(()=>{
        fetchData();
    },[item])
    return videoList?.length===0?<SimmerWatchlist/> : (
        <div>
            <div className="">
                <Filters/>
            </div>
            <div className="flex-col mr-2">
            { videoList?.map((item)=>(
                <Link key={item.id} to={"/watch?v="+item.id.videoId} >
                   <WatchVideocard  info={item}/>
                </Link>
            )
            )
            }
        </div>
        </div>
       
    )
}
export default WatchVideolist;