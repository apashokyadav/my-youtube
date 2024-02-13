import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import Videocard from "./Videocard";
import Simmer from "./Simmer/SimmerVideoContainer"
import { Link } from "react-router-dom";
const VideosContainer=()=>{
    const [videoList ,setVideoList]=useState([]);
    const fetchData=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const json=await data.json();
        setVideoList(json.items);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return videoList?.length===0?<Simmer/> : (
       <div className="w-full flex justify-center flex-wrap">
        { videoList?.map((item)=>(
            <Link key={item.id} to={"/watch?v="+item.id} >
              <Videocard  info={item}/>
            </Link>
        ))}
       </div>
    )
}
export default VideosContainer;

//"YouTube Data API v3 has not been used in project 383087513131 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=383087513131 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."