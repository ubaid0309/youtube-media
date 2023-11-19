import { IoIosCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { title, channelId } = video?.snippet;
  const { videoId } = video?.id;

  if (!video) return;
  return (
    <div className="flex flex-col  justify-center bg-[#2D2D2D] rounded-xl">
      <div className="rounded-xl">
        {video?.id?.channelId ? (
          <Link  to={`/channel/${video?.id?.channelId}`}>
            <img
              className="w-[70%] rounded-full "
              src={video?.snippet?.thumbnails?.high?.url}
              alt=""
            />
          </Link>
        ) : (
          <Link to={`/video/${videoId}`}>
            <img
              className="w-full "
              src={video?.snippet?.thumbnails?.high?.url}
              alt=""
            />
          </Link>
        )}
      </div>

      <div className="video-details  flex flex-col gap-2  rounded-lg px-2 py-1 w-full">
        {video?.id?.channelId ? (
          <Link className="w-[100%]" to={`/channel/${video?.id?.channelId}`}>
            <span className="text-lg  text-gray-200 text-center">{title.slice(0, 40)}</span>
          </Link>
        ) : (
          <Link className="w-[100%]" to={`/video/${videoId}`}>
            <span className="text-lg  text-gray-200">{title.slice(0, 40)}</span>
          </Link>
        )}
        <Link to={`/channel/${channelId}`}>
          <button className="flex gap-2 items-center hover:font-bold">
            {video?.snippet?.channelTitle}
            <span className="bg-gray-600  rounded-full text-black">
              <IoIosCheckmark />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
