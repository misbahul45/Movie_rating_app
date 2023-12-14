import { Link } from "react-router-dom";
import { DisplayType } from ".";
import AddRate from "./AddRate";


interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

const CostumDisplay = (props: Props) => {
  const { data, displayType } = props;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data.map((item) => (
        <div key={item.id}>
          <Link to={`/${displayType === DisplayType.Movies ? "movie" : "tvShow"}/${item.id}`}>
            <div className="p-2 bg-slate-500 rounded-md border-2 border-slate-200 hover:shadow-2xl">
              <img className="object-cover" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
              <h1 className="my-2 text-xl text-slate-100 font-serif font-semibold">
                {displayType === DisplayType.Movies ? item.title : item.name}
              </h1>
              <p className="text-slate-50">{item.overview.substring(0, item.overview.lastIndexOf(" ", 100))}</p>
            </div>
          </Link>
          <AddRate displayType={displayType} id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default CostumDisplay;
