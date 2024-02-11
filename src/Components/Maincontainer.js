import Filters from "./Filters";
import VideosContainer from "./VideosContainer";

const Maincontainer=()=>{
    return(
        <div className="flex-col justify-center mx-4">
            <div>
                <Filters/>
            </div>
        <div className="">
            <VideosContainer/>
        </div>
        </div>
    )
}
export default Maincontainer;