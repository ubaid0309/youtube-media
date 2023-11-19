import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI, options } from '../utils/constant';
import Videos from '../components/Videos';
import Loading from '../components/Loading';

const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [searchVideos, setSearchVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?q=${searchTerm}&part=snippet%2Cid&maxResults=50`, options).then(response => setSearchVideos(response.items))
  }, [searchTerm]);

  if(!searchVideos) return <Loading/>;
  return (
    <div className='px-4'>
      <p className='text-3xl my-1 text-white font-semibold'>Search results for <span className='text-[#F71B0B]'>{searchTerm}</span></p>
      <Videos videos={searchVideos} />
    </div>
  )
}

export default SearchFeed