import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {
    const { data: news } = useLoaderData()
    console.log(news);
    return (
        <div>
            <h1 className="font-semibold mb-3">Dragon News Home</h1>
            <p className="text-gray-400 text-sm">{news.length} News Found On this category</p>
            <div className="space-y-3">
                {
                    news.map((singlenews) => <NewsCard key={singlenews._id} news={singlenews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;