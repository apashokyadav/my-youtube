import { IoPersonCircle } from "react-icons/io5";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { getTimeDifference,convertViews } from "./functions";
import { useState } from "react";
import CommentContainer from "./CommentConatainer";
const WatchDiscription=({info})=>{
    const [showmore,setShowmore]=useState(false);
    const {snippet, statistics}=info;
    const {channelTitle,title,publishedAt,description}=snippet;
    const {viewCount,likeCount}=statistics;
    const timeDifference=getTimeDifference(publishedAt);
    const formattedLikes = convertViews(likeCount);   
    return(
    <div className="m-2 p-1 w-full h-full">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex justify-between px-2 my-2 h-10">
                <div className="flex justify-center">
                        <div className="flex justify-center items-center text-4xl">
                        <IoPersonCircle />
                        </div>
                        <div className="md:w-auto mx-2">
                                <h1 className="text-lg"> {channelTitle}</h1>
                                <h4 className="text-xs">...subscribers</h4>
                        </div>
                        <div className="flex justify-center items-center text-lg bg-slate-200 text-black px-2 rounded-full hover:bg-slate-400 cursor-pointer">
                            Subscribe
                        </div>
                </div>
                <div className="flex justify-center text-xl md:text-2xl text-zinc-300">
                     <div className="flex justify-center items-center md:mx-1 px-2 rounded-full  bg-zinc-700 hover:bg-zinc-500 cursor-pointer">
                            <div className="flex border-r-2 border-white md:mx-1 px-1">
                                <AiOutlineLike />
                                <h1 className="text-lg px-2" >{formattedLikes} </h1>
                            </div>
                            <div className="md:mx-1 px-1">
                                <AiOutlineDislike />
                            </div>
                     </div>
                     <div className="flex justify-center items-center  md:mx-2 px-2 rounded-full  bg-zinc-700 hover:bg-zinc-500 cursor-pointer">
                        <IoMdShareAlt />
                        <h1 className="text-xl" >Share</h1>
                     </div>
                     <div className="flex justify-center items-center m-1  rounded-full  bg-zinc-700 hover:bg-zinc-500  cursor-pointer">
                     <IoIosMore />
                     </div>
                </div>
        </div>
        
        <div className="w-full my-2 bg-zinc-800  rounded-3xl p-2">
            <div>
                <div className="flex  px-2 text-lg text-zinc-200">
                    <h1>{viewCount + " views "}</h1>
                    <h1 className="ml-1" >{timeDifference+" ago"}</h1>
                </div>

                <div className="flex flex-wrap text-zinc-400 " >{showmore && description} </div>
                <button className="font-bold" onClick={()=>setShowmore(!showmore)} > {showmore?"show less":"...more"}</button>
            </div>
        </div>
        <div><CommentContainer videoid={info.id} /></div>

        

    </div>
    )   
}
export default WatchDiscription;