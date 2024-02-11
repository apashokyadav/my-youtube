const WatchVideoCard = ({id}) => {
  return (
    <div className="w-full  h-full lg:p-4 rounded-lg ">
    
        <iframe
        className="w-full h-64 md:h-80 lg:h-[30rem] lg:mx-4 rounded-2xl"
        src={"https://www.youtube.com/embed/"+id+"?si"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      
    </div>
  );
};
export default WatchVideoCard;
