import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { DisplayType } from ".";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css"

interface Props{
    displayType:string,
    id:number
}
const AddRate = ({ displayType,id }:Props) => {
    const [rating, setRating] = useState<number>(0);

    const onError=()=>{
        toast.error("Something wehn wrong !")
    }
    const onSucces=()=>{
        toast.success("Successfully rated!")
    }

    const { mutate: rateMovieMutation } = useMutation({
        mutationKey: ["rateMovie"],
        mutationFn: () => rateMovie(id,rating),
        onSuccess:onSucces,
        onError:onError
      });
      
    const { mutate: rateTvShowMutation } = useMutation({
      mutationKey: ["rateTvShow"],
      mutationFn:()=>rateTvShow(id, rating),
      onSuccess:onSucces,
      onError:onError
    });
  
    const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation;
  
    const handleAdd = async() => {
     if(rating>0 && rating<=10){
        await rate();
        setRating(0);
     }else{
        toast.error(rating<=0?"The Rate amount is too low":"Rates are too high")
        setRating(0);
     }
    };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex mt-2">
       <input
        className="w-10 pl-2 outline-none placeholder:text-slate-300"
        type="text"
        placeholder="0"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        />
        <button type="button" onClick={handleAdd} className="px-4 py-1 bg-purple-600 flex items-center gap-2">
        <span className="text-slate-50 ">Rate</span>
        <FaStar className="text-yellow-400" />
        </button>
    </form>
  )
}

export default AddRate
