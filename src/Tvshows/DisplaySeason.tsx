import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface DisplayProps{
    episode:number;
    date:string;
    sesion:number;
}
const DisplaySeason = ({ episode, date, sesion }:DisplayProps) => {
    const [openSesion,setOpenSesion]=useState(false)
  return (
    <div className="flex flex-col gap-2 mt-1.5">
        <button onClick={()=>setOpenSesion(!openSesion)} className="flex gap-1 items-center group">
            <MdArrowForwardIos className={`${openSesion?" rotate-90":""} text-slate-500 transition-all duration-300`} />
            <span className="font-semibold text-sm group-hover:text-red-500">Season : {sesion} </span>
        </button>
        {openSesion&&
            <div className="w-full py-1 bg-gray-300 pl-5 rounded-md border-[1px] border-slate-900">
                <p><span className="text-slate-900 font-semibold text-sm font-serif">Start Date : </span><span>{date}</span></p>
                <p><span className="text-slate-900 font-semibold text-sm font-serif">Amount Episode : </span><span>{episode}</span></p>
            </div>
        }
    </div>
  )
}
export default DisplaySeason
