const WatchVideoCard = ({id}) => {
  return (
    <div className="w-full  h-full lg:p-4 rounded-lg ">
    
        <iframe
        className="w-full h-full rounded-lg"
        src={"https://www.youtube.com/embed/"+id+"?si"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      
    </div>
  );
};
export default WatchVideoCard;
