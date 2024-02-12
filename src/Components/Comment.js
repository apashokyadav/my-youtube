import { getTimeDifference } from "./functions";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const Comment=({info})=>{
    const {authorDisplayName,authorProfileImageUrl,likeCount,publishedAt,textDisplay,authorChannelUrl}=info.snippet.topLevelComment.snippet;
    const convertime=getTimeDifference(publishedAt);
    return(
        <div className="flex my-2 bg-inherit w-full ">
            <div className="m-2 p-2 ml-0 pl-0">
                <img src={authorProfileImageUrl} className="w-8 h-8 bg-teal-500 rounded-full" />
            </div>
            <div className="flex-col mx-2 w-full">
                <div className="flex"> 
                    <div className="text-zinc-50 mr-3"> {authorDisplayName}</div>
                    <div className="text-zinc-500">{convertime}</div>
                </div>
                <div className="w-full text-sm text-zinc-400" > {textDisplay}</div>
                <div className="flex  items-center">
                    <div className="mx-2 flex justify-center items-center"> 
                      <div> <AiOutlineLike /></div>
                      <div> {likeCount>0 &&likeCount }  </div>
                    </div>
                    <div className="mx-3" ><AiOutlineDislike /> </div>
                </div>
                
            </div>

        </div>
    )
}
export default Comment;