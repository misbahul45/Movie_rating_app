import { useState } from "react"
import CostumDisplay from "./CostumDisplay"
import { fetchMovies, fetchTvShows } from "./query"
import { useQuery } from "@tanstack/react-query"

export enum  DisplayType{
    Movies="movies",
    TvSHows="tvshows"
}
const Home = () => {
    const [displayType, setDisplayType]= useState<DisplayType>(DisplayType.Movies)
    
    const { data: movieData, isLoading:isLoadingMovie }=useQuery({
      queryKey:["Movies"],
      queryFn:fetchMovies
    })
    const { data: tvShowsData, isLoading:isLoadingTvShows }=useQuery({
      queryKey:["TvShows"],
      queryFn:fetchTvShows
    })

    const handleDisplayType=()=>{
        setDisplayType(displayType===DisplayType.Movies?DisplayType.TvSHows:DisplayType.Movies)
    }
    if(isLoadingMovie || isLoadingTvShows){
      return <div className="py-64 bg-slate-400 w-full h-screen text-center text-6xl text-white">Loading...</div>
    }
  return (
    <main className="pt-20 pb-8 px-10 bg-slate-400 w-full min-h-screen">
      <div className="flex justify-center gap-3 mb-6">
        <button onClick={handleDisplayType} className={`${displayType===DisplayType.Movies?"bg-gray-800 text-slate-100":"bg-blue-600 text-slate-100"} px-5 py-1 rounded-md shadow-lg transition-all duration-100`}>
            Movies
        </button>
        <button onClick={handleDisplayType} className={`${displayType===DisplayType.TvSHows?"bg-gray-800 text-slate-100":"bg-blue-600 text-slate-100"} px-5 py-1 rounded-md transition-all duration-100`}>
            TV Shows
        </button>
      </div>
        <div>
        {
            displayType===DisplayType.Movies?
            <CostumDisplay data={movieData.results} displayType={DisplayType.Movies} />
            :
            <CostumDisplay data={tvShowsData.results} displayType={DisplayType.TvSHows} />
        }
       </div>
    </main>
  )
}

export default Home
