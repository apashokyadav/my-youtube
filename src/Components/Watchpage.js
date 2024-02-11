import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import WatchVideoCard from "./WatchVideoCard";
import WatchVideolist from "./WatchVideolist";
import WatchDiscription from "./WatchDiscription";

const WatchPage=()=>{
    const [searchParams]=useSearchParams();
    const[Videoinfo,setVideoInfo]=useState(0);
    const videoid=searchParams.get("v");
    const YOUTUBE_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoid+"&key=" + GOOGLE_API_KEY;
    const dispatch=useDispatch();
    const handletoggelmenu=()=>{
        fetchData();
        dispatch(closeMenu())
    }
    const fetchData=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_API);
        const json=await data.json();
        setVideoInfo(json);
    }
    useEffect(()=>{
        handletoggelmenu();    
    },[]);
    return (
        <div className="lg:flex w-full h-full">
            <div className="flex-col w-full h-full  p-3 px-6 lg:w-3/4">
                <div className="h-1/2 md:h-3/4" ><WatchVideoCard id={videoid} /> </div>
                <div className="">{Videoinfo===0?"simmer": <WatchDiscription info={Videoinfo.items[0]}/>}</div>
            </div>
            <div className="w-full lg:w-1/4 h-full p-2 px-4 ">
                <WatchVideolist/>
            </div>
            
        </div>

    )
}
export default WatchPage;