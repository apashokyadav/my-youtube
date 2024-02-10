const SimmerVideo=()=>{
    return(
        <div className="m-2 p-1 w-4/5 h-96 sm:w-80 sm:h-64">
            <div className="w-full h-4/5 bg-zinc-700 rounded-xl">        
             </div>
             <div className="flex w-full h-1/5" >      
                <div className="w-1/5 h-full flex justify-center items-center">
                    <div className="w-12 h-12  bg-zinc-700 rounded-full " ></div>
                </div>
                <div className="w-4/5 h-full">
                    <h1 className="my-1 ml-2 w-4/5 h-5 bg-zinc-700  rounded-lg"></h1>
                    <h1 className="my-1 ml-2 w-3/5 h-5 bg-zinc-700 rounded-lg "></h1>
                </div>
      </div>
    </div>
    )
}
const SimmerVideoContainer=()=>{
    const components = [];
    const renderComponents = () => {
        for (let i = 0; i < 10; i++) {
          // Push the component JSX into the components array
          components.push(<SimmerVideo key={i} />);
        }
        return components;
      };
    return(
        <div className="mx-3 w-full h-full flex justify-center flex-wrap">       
           { renderComponents()}
        </div>

    )
}
export default SimmerVideoContainer;