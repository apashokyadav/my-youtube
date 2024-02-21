import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";

const Chatmessage = ({ info }) => {
  const { authorDetails, snippet } = info;
  const { displayName, isVerfied, profileImageUrl } = authorDetails;
  const { displayMessage } = snippet;
  return (
    <div className="flex w-full">
      <div className="w-8 h-10">
        <img className=" m-1 p-1 rounded-full items-center" src={profileImageUrl}></img>
      </div>
      <div className="flex flex-wrap  ml-1 items-center">
        <h1 className="text-base text-zinc-100 mr-3 ">{displayName}</h1>
        <h2 className="text-sm text-zinc-300 ">{displayMessage}</h2>
      </div>
    </div>
  );
};

const LiveChat = ({ id }) => {
  const [showchat, setShowchat] = useState(false);
  const [chatData, setchatData] = useState([]);
  const [chatId, setchatId] = useState(0);
  const fetchStreamdetails = async () => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=" +id +"&key=" +GOOGLE_API_KEY);
        const json = await data.json();
        setchatId(json?.items[0]?.liveStreamingDetails?.activeLiveChatId);
  };
  useEffect(() => {
        fetchStreamdetails();
  },[]);
  const getchat = async () => {
    const data = await fetch("https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=" +chatId +"&part=snippet,authorDetails&maxResults=30&key="+GOOGLE_API_KEY);
    const json = await data.json();
    console.log(json);
    setchatData(json);
    console.log(chatData)
  }; 
  useEffect(() => {
    const apipool=setInterval(() => {
        if(chatId!==0){
                 getchat();
                 console.log("apipool");
         }
    }, 500);
    
    return ()=>{
        clearInterval(apipool);
    }; 
  },[chatId]);
  return (
    <div className="border border-zinc-300 w-full flex-col rounded-xl">
      { !showchat ? "":
        <div className="w-full h-96 overflow-y-scroll flex-col-reverse">
            {chatData.length===0? "":chatData?.items?.map((item)=>(
                            <Chatmessage info={item} />
                    ))}         
        </div>
       }
      <button
        className="w-full rounded-xl bg-inherit hover:bg-zinc-500 h-8"
        onClick={() => setShowchat(!showchat)}
      >
        {showchat ? "Hide chat" : "Show chat"}
      </button>
    </div>
  );
};
export default LiveChat;