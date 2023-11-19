import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube';
import { fetchFromAPI, options } from '../utils/constant';
import Loading from '../components/Loading';
import Videos from '../components/Videos';
import { IoIosCheckmark } from "react-icons/io";
import { AiOutlineLike , AiOutlineDislike  } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";

 const likeConvert = (likeCount)=>{
  const likeCountInNumber = parseInt(likeCount);
  if(likeCountInNumber <= 1000){
    return likeCountInNumber;
  }
  else if(likeCountInNumber <= 999999){
    const likeCountInK = likeCountInNumber / 1000;
    return likeCountInK.toFixed(0)+"K";
  }

  else{
    const likeCountInM = likeCountInNumber / 100000;
    return likeCountInM.toFixed(0)+"M";
  }

}
const VideoDetail = () => {

  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { snippet, statistics } =  videoDetail;
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet%2Cstatistics&id=${id}`, options).then(result => setVideoDetail(result?.items[0]));

    fetchFromAPI(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`,options).then(result => setRelatedVideos(result))

  }, [id]);

  if (!relatedVideos) return <Loading />;

  return (
    <div className='video-details flex flex-col lg:flex-row px-9  justify-center pt-[4%]'>
      <div className='w-full'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width={"90%"} height={"60%"} controls={true} className="react-player object-fit  " />
        
        <div className='video-info flex flex-col gap-2'>
          <p className='text-white text-xl'>{snippet?.title}</p>

          <div className='video-channel-info text-white flex  items-center justify-between w-[90%]'>
            <button className='flex items-center gap-1'>
              <span className='text-xl'>{snippet?.channelTitle}</span>
              <span className="bg-gray-600  rounded-full text-black">
              <IoIosCheckmark />
            </span>
            </button>

            <div className='video-statistics hidden md:flex items-center gap-2 text-gray-300'>
              <div className='like-dislike-btn hover:bg-[#282e28f1] bg-[#282E28] px-2 py-2 rounded-full text-xl flex items-center gap-2'>
                <button className='border-r px-2 text-xl gap-1 flex items-center '><AiOutlineLike/> <span>{likeConvert(statistics?.likeCount)}</span></button>
                <button className='px-2 text-xl flex items-center'><AiOutlineDislike/></button>
              </div>

              <button className='bg-[#282E28] hover:bg-[#282e28f1] px-2 py-2 rounded-full text-xl flex items-center gap-2'><RiShareForwardLine/><span>Share</span></button>
              <button className='bg-[#282E28] hover:bg-[#282e28f1] px-2 py-2 rounded-full text-xl flex items-center gap-2'><HiDownload/><span>Download</span></button>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen  w-full lg:w-[40%] '>
        <Videos direction="col" videos={relatedVideos.items}/>
      </div>
    </div>
  )
}

export default VideoDetail