import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { updatelist } from "../utils/VideolistSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [searchQuery,setSearchQuery]=useState(" ");
    const [ Searchsuggetion,setSearchsuggestion]=useState([]);
    const [isShowsuggestion,setIsshowsuggestion]=useState(false);
    const cache=useSelector(store=>store.search)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const getSearchsuggetion=async()=>{
        const data= await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchQuery);
        const json= await data.json();
        setSearchsuggestion(json[1]);
        dispatch(cacheResults({[searchQuery]:json[1]}));
    }
    const onsearch=async(query)=>{
      const data=await fetch(YOUTUBE_SEARCH_API+query+"&key="+GOOGLE_API_KEY)
      const json=await data.json();
      dispatch(updatelist(json.items));
      setIsshowsuggestion(false);
      navigate('/search')
      
    }
    useEffect(()=>{
        const timer=setTimeout(() => {
            if(cache[searchQuery]){
              setSearchsuggestion(cache[searchQuery])
            }
            else{
              getSearchsuggetion()
            }
           
        },200);     
        return()=>{
            clearTimeout(timer);
        }
    },[searchQuery])

//onBlur= {()=>setIsshowsuggestion(false)}
  return (
    <div  >
      <div>
        <div className="flex m-2 mt-4 w-40 h-9 rounded-2xl md:w-80">
          <div >
            <input
              onChange={(e)=>setSearchQuery(e.target.value)}
              value={searchQuery}
              className="outline-none w-28 h-full md:w-60 pl-3 bg-zinc-900 border border-slate-800 border-r-0 rounded-l-2xl focus:border-sky-900 "
              type="text"
              onFocus={()=>setIsshowsuggestion(true)}
              
              placeholder="Search"
            ></input>
         <div className="absolute z-10  mt-2 bg-zinc-900 rounded-lg shadow-md">
             {isShowsuggestion &&
                Searchsuggetion.map(item=>
                    <button className="flex items-center my-1 px-4 py-1 rounded-lg hover:bg-zinc-700 cursor-pointer"
                   
                    >
                      <div> <IoSearchOutline /> </div>
                      <h1 className="ml-1 pb-1"
                       onClick={()=>{
                        setSearchQuery(item)
                        onsearch(item)}
                      }
                        >{item} </h1> 
                    </button>)
          }
          </div>

          </div>
          {/* <Link to="/SearchResult" > */}
          <button className="flex justify-center items-center text-2xl w-10  md:w-16 bg-zinc-800 border border-slate-800 rounded-r-2xl "
           onClick={()=>onsearch(searchQuery)}
           >
            <IoSearchOutline />
          </button>
        </div>

      </div>
    </div>
  );
};
export default Search;
