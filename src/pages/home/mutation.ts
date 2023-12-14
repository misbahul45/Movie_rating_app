export const rateMovie = async (movieId:number, rating:number) => {
    const res=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=e4e6eb50ba49af794d4f57cdf80e1fba`,
        {
            method:"POST",
            headers:{
                accept:"application/json",
                "content-type":"application/json;sharset=utf-8"
            },
            body:`{"value": ${rating}}`
        },
    );
    return res.json()
}

export const rateTvShow = async (tvShowId:number, rating:number) => {
    const res=await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=e4e6eb50ba49af794d4f57cdf80e1fba`,
        {
            method:"POST",
            headers:{
                accept:"application/json",
                "content-type":"application/json;sharset=utf-8"
            },
            body:JSON.stringify({ value: rating })
        },
    );
    return res.json()
}