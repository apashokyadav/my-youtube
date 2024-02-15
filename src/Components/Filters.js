import { useDispatch } from "react-redux";
import { updatelist } from "../utils/VideolistSlice";
import { useNavigate } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constant";

export const Filtercard=({name})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const onfilter=async(query)=>{
        const data=await fetch(YOUTUBE_SEARCH_API+query+"&key="+GOOGLE_API_KEY)
        const json=await data.json();
        dispatch(updatelist(json.items));
        navigate('/search')       
    }
    return(
        <div className="px-2 m-2 h-6 bg-zinc-800 hover:bg-zinc-600 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer"
            onClick={()=>onfilter(name)}
        >
            {name}
        </div>
    )
}
const Filters=()=>{
    
    const arr=["React.js","News","Music","Live","Website","Cricket",]
    return(
        <div className="">     
        <div className="mx-auto flex space-x-4 flex-wrap" id="scroll-container"> 
            {arr.map((item)=>
                <Filtercard key={item} name={item} />
            )}
        </div>
        </div>
    )
}
export default Filters