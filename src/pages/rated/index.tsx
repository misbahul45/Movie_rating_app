import { useState } from "react";
import { DisplayType } from "../home";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvSHow } from "./query";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

interface RatedItem {
  id: number;
  poster_path: string;
  title?: string;
  name?:string;
  rating: number; 
  overview: string;
}

const Rated = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);

  const { data: ratedMovies, isLoading: isLoadingRateMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });

  const { data: ratedTvShow, isLoading: isLoadingTvShow } = useQuery({
    queryKey: ["ratedTvShow"],
    queryFn: fetchRatedTvSHow,
  });

  const handleDisplayType = () => {
    setDisplayType(displayType === DisplayType.Movies ? DisplayType.TvSHows : DisplayType.Movies);
  };

  if (isLoadingRateMovies || isLoadingTvShow)
    return (
      <div className="h-screen flex justify-center items-center bg-slate-400 ">
        <h1 className="text-6xl text-slate-300">Loading....</h1>
      </div>
    );

  return (
    <main className="pt-16 pb-8 px-10 bg-slate-400 w-full min-h-screen">
      <>
        <h2 className="text-center text-5xl capitalize font-serif font-semibold text-slate-600">{displayType}</h2>
      </>
      <div className="flex justify-center gap-3 mt-5 mb-6">
        <button onClick={handleDisplayType} className={`${displayType === DisplayType.Movies ? "bg-gray-800 text-slate-100" : "bg-blue-600 text-slate-100"} px-5 py-1 rounded-md shadow-lg transition-all duration-100`}>
          Movies
        </button>
        <button onClick={handleDisplayType} className={`${displayType === DisplayType.TvSHows ? "bg-gray-800 text-slate-100" : "bg-blue-600 text-slate-100"} px-5 py-1 rounded-md transition-all duration-100`}>
          TV Shows
        </button>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {((displayType === DisplayType.Movies ? ratedMovies.results : ratedTvShow.results) as RatedItem[]).map((item) => (
          <Link key={item.id} to={`/${displayType === DisplayType.Movies ? "movie" : "tvShow"}/${item.id}`}>
            <div className="p-2 bg-slate-500 rounded-md border-2 border-slate-200 hover:shadow-2xl">
              <img className="object-cover" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
              <div className="flex justify-between items-center">
                <span className="my-4 text-xl text-slate-100 font-serif font-semibold">{displayType === DisplayType.Movies ? item.title : item.name}</span>
                <span className="px-2 py-1 bg-gray-200 shadow-lg rounded-sm border-[2px] border-red-800">
                  Your Rating : {item.rating}
                </span>
              </div>
              <p className="text-slate-50">{item.overview.substring(0, item.overview.lastIndexOf(" ", 100))}</p>
              <div className="flex items-center gap-2 w-24 py-1 bg-purple-800 px-2 rounded-md mt-2 border-[2px] shadow-lg">
                <p className="text-slate-50">Rated</p>
                <FaStar className="text-slate-50" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Rated;
