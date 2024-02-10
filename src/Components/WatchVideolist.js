import { convertDuration,getTimeDifference,convertViews } from "./functions";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import SimmerWatchlist from "./Simmer/SimmerWatchlist";

const WatchVideocard = ({ info }) => {
    const {id,snippet,statistics,contentDetails}=info;
    const {channelTitle,title,publishedAt}=snippet;
    const {viewCount}=statistics;
    const videoduration= convertDuration(contentDetails.duration);
    const timeDifference=getTimeDifference(publishedAt);
    const formattedViews = convertViews(viewCount);
  return (
    <div className="flex m-2 p-1 w-full rounded-2xl hover:bg-zinc-800">
        <div className="w-1/2 relative h-full m-2">
                <img
                className="rounded-xl h-full "
                src={"https://i.ytimg.com/vi/" + id + "/mqdefault.jpg"}
                alt="Video"
                />
                <div className=" absolute bottom-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded-md">{videoduration}</div>
        </div>
        <div className=" w-1/2 m-1 ml-0">
            <h1 className=" text-sm">{title}</h1>
            <div>
                <h1 className=" text-sm text-gray-600">{channelTitle}</h1>
                <div className="flex  text-xs text-gray-500">
                    <h1>{formattedViews + " views "}</h1>
                    <h1 className="ml-1" >{timeDifference+" ago"}</h1>
                </div>
            </div>
        </div>

        

    </div>
  );
};

const WatchVideolist=()=>{
    const [videoList ,setVideoList]=useState([]);
    const fetchData=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const json=await data.json();
        setVideoList(json.items);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return videoList.length===0?<SimmerWatchlist/> : (
        <div>
            <div className="">
                <Filters/>
            </div>
            <div className="flex-col mr-2">
            { videoList.map((item)=>(
                <Link key={item.id} to={"/watch?v="+item.id} >
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