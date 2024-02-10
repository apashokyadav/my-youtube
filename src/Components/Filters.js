export const Filtercard=({name})=>{
    return(
        <div className="px-2 m-2 h-6 bg-zinc-800 hover:bg-zinc-600 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer">
            {name}
        </div>
    )
}
const Filters=()=>{
    const arr=["All","React.js","Vishnu Jangid","News","Music","Live","Website","Cricket",]
    return(
        <div className="overflow-x-auto">     
        <div className="mx-4 flex space-x-4 " id="scroll-container"> 
            {arr.map((item)=>
                <Filtercard key={item} name={item} />
            )}
        </div>
        </div>
    )
}
export default Filters