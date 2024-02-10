import { BsPersonCircle } from "react-icons/bs";
import { convertDuration,getTimeDifference,convertViews } from "./functions";

const Video = ({ info }) => {
    const {id,snippet,statistics,contentDetails}=info;
    const {channelTitle,title,publishedAt}=snippet;
    const {viewCount,likeCount}=statistics;
    const videoduration= convertDuration(contentDetails.duration);
    const timeDifference=getTimeDifference(publishedAt);
    const formattedViews = convertViews(viewCount);
  return (
    <div className="m-2 p-1 w-auto sm:w-80 shadow-lg">
        <div className="relative">
                <img
                className=" w-full rounded-xl"
                src={"https://i.ytimg.com/vi/" + id + "/mqdefault.jpg"}
                />
                <div className=" absolute bottom-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded-md">{videoduration}</div>
        </div>
        <div className="flex " >
                
            <div className="flex-col items-center w-8 mr-1 ">
                 <div className="text-2xl m-2 ml-1 p-1 pl-0 text-gray-500" >  <BsPersonCircle /></div>
            </div>

            <div>
                <h1 className=" text-lg">{title}</h1>
                <h1 className=" text-sm text-gray-600">{channelTitle}</h1>
                <div className="flex  text-sm text-gray-500">
                    <h1>{formattedViews + " views "}</h1>
                    <h1 className="ml-1" >{timeDifference+" ago"}</h1>
                </div>
            </div>
      </div>

    </div>
  );
};
export default Video;
