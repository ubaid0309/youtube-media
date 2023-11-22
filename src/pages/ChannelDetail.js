import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI, options } from '../utils/constant';
import Loading from "../components/Loading";
import Videos from '../components/Videos';
import { IoIosCheckmark } from "react-icons/io";
const ChannelDetail = () => {

  const { id } = useParams();

  const [channelDetails, setChannelDetails] = useState([]);
  const [channelVideos, setChaannelVideos] = useState([]);
  const { snippet, contentDetails, statistics, brandingSettings } = channelDetails;
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`, options).then(response => setChannelDetails(response?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`, options).then(response => setChaannelVideos(response.items));
  }, [id])

  const subsConvert = (subsCount) => {
    const subsCountInNumber = parseInt(subsCount);
    if (subsCountInNumber <= 1000) {
      return subsCountInNumber;
    }
    else if (subsCountInNumber <= 1000000) {
      const subsCountInK = subsCountInNumber / 1000;
      return subsCountInK.toFixed(0) + "K";
    }

    else {
      const subsCountInM = subsCountInNumber / 1000000;
      return subsCountInM.toFixed(0) + "M";
    }

  }

  if (!channelDetails) return <Loading />
  return (
    <div className='channel-details'>
      {/* {console.log(snippet , contentDetails , statistics , brandingSettings)} */}
      <div className='channel-info flex flex-col gap-4'>
        <img className='w-[90%] lg:w-[40%] h-fit mx-auto rounded-md ' src={brandingSettings?.image?.bannerExternalUrl} alt="" />

        <div className='w-[90%] lg:w-[40%] flex items-center  gap-1  mx-auto'>

          <img className='rounded-full w-[25%]' src={snippet?.thumbnails?.medium?.url} alt="channel-logo" />

          <div className='text-slate-400 text-base flex flex-col gap-2 p-2'>
            <div className='flex items-center gap-1'>
            <p className='channel-title text-white text-xl md:text-3xl font-semibold'>{snippet?.title}</p>
            <span className="bg-gray-600  rounded-full text-white">
              <IoIosCheckmark />
            </span>
            </div>
            <div className='hidden text-slate-400 md:flex  gap-1 text-base'>
              <p className='channel-title'>{snippet?.customUrl} .</p>
              <p className='channel-subscribers-count'>{subsConvert(statistics?.subscriberCount)} subscribers .</p>
              <p className='channel-total-videos-count'>{statistics?.videoCount} videos</p>
            </div>
            <p className='channel-description '>{snippet?.description.length >= 80 ? snippet?.description.slice(0,40) + " ..." : snippet?.description }</p>
            <button className='text-black  bg-white rounded-full px-4 py-2 w-[80%] md:w-[40%] hidden md:block'>Subscribe</button>
          </div>

        </div>
      </div>

      <div className='channel-videos p-4'>
        <Videos videos={channelVideos} />
      </div>


    </div>
  )
}

export default ChannelDetail