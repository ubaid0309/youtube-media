import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { fetchFromAPI } from '../utils/constant';
import { options } from '../utils/constant';
import Loading from '../components/Loading';
import Videos from '../components/Videos';
const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);


  useEffect(() => {

    fetchFromAPI(`search?q=${selectedCategory}&part=snippet%2Cid&maxResults=50`, options).then(result => setVideos(result));
    // console.log(videos)

  }, [selectedCategory])

  if (!videos) return;

  return (
    <div className='video-feed text-white flex flex-col lg:flex-row'>
      <div className='w-full md:w-[15%] bg-black'>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>


      <div className='px-3 w-full bg-black '>
        <div className='selected-category text-2xl text-[#F71B0B] font-semibold'>
          <span className='text-white mr-2'>{selectedCategory}</span>
          Videos
        </div>

        <Videos videos={videos.items} />
      </div>

    </div>
  )
}

export default Feed