import { AiFillStar } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { LuBookMarked } from "react-icons/lu";
import { MdLocalOffer } from "react-icons/md";


const NewsCard = (props = {}) => {
    const { news } = props || {};
    return (
        <div className=" bg-white rounded-lg shadow-md overflow-hidden">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <img
                            src={news.author.img}
                            alt="Author"
                            className="w-10 h-10 rounded-full object-cover mr-2"
                        />
                        <div>
                            <h4 className="text-sm font-semibold">{news.author.name}</h4>
                            <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <FaBookmark className="text-gray-600 cursor-pointer" title="Tag" />
                        <BiShareAlt className="text-gray-600 cursor-pointer" title="Share" />
                    </div>
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {news.title}
                </h2>
            </div>
            <img
                src={news.thumbnail_url}
                alt="Thumbnail"
                className="w-full h-72 "
            />
            <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                    {news.details.substring(0, 100)}...
                    <span className="text-blue-500"> Read More</span>
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                        <AiFillStar className="mr-1" />
                        <span className="font-bold text-gray-700">{news.rating.number}</span>
                        <span className="ml-1 text-sm text-gray-500">{news.rating.badge}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FiEye className="mr-1" />
                        <span>{news.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;