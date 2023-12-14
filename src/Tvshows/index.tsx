import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { FaStar } from "react-icons/fa6"
import { fetchTvShowDetails } from "./fetchTvShowDetail"
import DisplaySeason from "./DisplaySeason"


interface Season{
  id:number;
  episode_count:number;
  air_date:string;
  season_number:number;
}
const TvShows = () => {
  let averageDisplay:any=[]
  const { id }=useParams()
  const { data, isLoading }=useQuery({
      queryKey:["movie"],
      queryFn:()=>fetchTvShowDetails(id?id:"")
  })
  console.log(data)
  for(let i=1;i<Math.ceil(data?.vote_average);i++){
    averageDisplay.push(<FaStar key={i} className="text-yellow-400" />)
  }

  console.log(data)
  if(isLoading) return <div className="flex justify-center items-center bg-slate-400 w-full h-screen"><h1 className="text-7xl text-slate-100">Loading...</h1></div>
return (
  <main className="pt-16 pb-8  bg-slate-400 w-full min-h-screen">
    <h1 className="text-center text-3xl mb-5 text-slate-900 font-semibold font-serif">{data.original_name}</h1>
    <div className="flex lg:gap-10 gap-4 items-center justify-center px-3 flex-wrap">
          <div className="shadow-xl shadow-black/40">
              <img className="w-full md:max-w-[18rem] max-w-md object-cover" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
          </div>
          <div className={`w-full lg:max-w-sm bg-slate-200 px-6 py-2 max-h-[27rem] scroll-smooth no-scrollbar rounded-lg shadow-xl shadow-black/30 border-2 border-slate-600 overflow-y-scroll`}>
            <ul className="h-full flex flex-col gap-2">
              <li>
                <p><span  className="text-slate-900 font-semibold font-serif">Originals Title : </span>{data.original_name}</p>
              </li>
              <li>
                <p className="flex flex-col">
                  <span className=" font-serif text-slate-800 font-semibold">Description : </span>
                  <span className="text-slate-700 first-letter:ml-7">{data.overview}</span>
                </p>
              </li>
              <li>
               <p className="flex flex-col">
                <span className="text-slate-800 font-serif font-semibold">Genres :</span> 
                <span>
                  {
                    data.genres.map((genre:{ name:string },index:number)=>(
                      <span key={index}>{index===data.genres.length-1?genre.name+".": genre.name+", "}</span>
                    ))
                  } 
                </span>
                </p>
              </li>
              <li>
                <p><span className="text-slate-800 font-serif font-semibold">Release Date :</span> {data.first_air_date}</p>
              </li>
              <li>
                <p><span className="text-slate-800 font-serif font-semibold">Productions : </span>
                  {
                    data.production_companies.map((production:{ name:string },index:number)=>(
                      <span key={index}>{index===data.production_companies.length-1?production.name+".": production.name+", "}</span>
                    ))
                  }
                </p>
              </li>
              <li>
                <p className="flex items-center gap-1">
                  <span className="text-slate-800 font-serif font-semibold">Rate : </span>
                  <span className="flex">{averageDisplay}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-slate-800 font-serif font-semibold">Language : </span>
                  <span>{data.original_language}</span>
                </p>
              </li>
              <li className="flex flex-col">
                <p className="font-bold text-lg text-slate-600">Seasons : </p>
                <div className={`max-h-64 ${data.seasons?.length>5?"overflow-y-scroll":""} scroll-smooth`}>
                  {
                    data.seasons?.map((season:Season)=>(
                      <DisplaySeason key={season.id} episode={season.episode_count} date={season.air_date} sesion={season.season_number} />
                    ))
                  }
                </div>
              </li>
            </ul>
          </div>
    </div>
  </main>
)
}

export default TvShows
