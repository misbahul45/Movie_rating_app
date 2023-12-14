import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { fetchMovieDetails } from "./fetchMovieDetails"
import { FaStar } from "react-icons/fa6";



const Movies = () => {
    let averageDisplay:any[]=[]
    const { id } = useParams();
    const { data, isLoading }=useQuery({
        queryKey:["movie"],
        queryFn:()=>fetchMovieDetails(id?id:"")
    })

    for(let i=1;i<Math.ceil(data?.vote_average);i++){
      averageDisplay.push(<FaStar key={i} className="text-yellow-400" />)
    }

    if(isLoading) return <div className="pt-20 pb-8 px-72 bg-slate-400 w-full h-screen text-center text-7xl text-slate-100">Loading...</div>
  return (
    <main className="pt-16 pb-8  bg-slate-400 w-full min-h-screen">
      <h1 className="text-center text-3xl mb-5 text-slate-900 font-semibold font-serif">{data.title}</h1>
      <div className="flex lg:gap-10 gap-4 items-center justify-center px-3 flex-wrap">
            <div className="shadow-xl shadow-black/40">
                <img className="w-full md:max-w-[18rem] max-w-md object-cover" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
            </div>
            <div className="w-full lg:max-w-sm bg-slate-200 px-6 py-2 overflow-y-scroll no-scrollbar rounded-lg shadow-xl shadow-black/30 border-2 border-slate-600 ">
              <ul className="h-full flex flex-col gap-2">
                <li>
                  <p className="text-slate-900 font-semibold font-serif">Originals Title : {data.original_title}</p>
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
                  <p><span className="text-slate-800 font-serif font-semibold">Release Date :</span> {data.release_date}</p>
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
              </ul>
            </div>
      </div>
    </main>
  )
}

export default Movies
