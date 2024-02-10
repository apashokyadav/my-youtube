import Filters from "./Filters";
import VideosContainer from "./VideosContainer";

const Maincontainer=()=>{
    return(
        <div>
            <div>
                <Filters/>
            </div>
        <div className="flex justify-center mx-4 mg:mx-8">
            <VideosContainer/>
        </div>
        </div>
    )
}
export default Maincontainer;