import React from 'react'
import VideoCard from './VideoCard'
const Videos = ({videos , direction}) => {
  if(!videos) return;

  return (
    <div className={` ${direction ? "flex flex-col gap-10 text-white" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center text-white"} `}>
      {videos.map((video , index)=>(
        <VideoCard key={video?.videoId || index} video={video}/>
      ))}
    </div>
  )
}

export default Videos