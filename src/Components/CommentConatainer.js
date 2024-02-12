import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import Comment from "./Comment";

const CommentContainer=({videoid})=>{
    const[commentinfo,setCommentInfo]=useState([]);
    const fetchdata=async()=>{
        const data=await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId="+videoid+"&maxResults=50");
        const json=await data.json();
        setCommentInfo(json.items);
    }
    useEffect(()=>{
        fetchdata();
    },[videoid])

    return(
        <div className="m-2 mt-4" >
            <div className="flex">
                <div className="">
                    <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full bg-teal-600">V </div>
                </div>
                <div className="ml-4 w-full" >
                    <input type="text" className="w-full outline-none bg-inherit border-b-2 border-zinc-300 focus:border-gray-50  " placeholder="Add a comment.." 
                         ></input>
                </div>
            </div>
            <div>
            {commentinfo?.length===0? "Comment" :commentinfo.map((item)=>(
              <Comment  key={item.id} info={item}/>
            ))}
            </div>
           

        </div>
     )
}
export default CommentContainer;